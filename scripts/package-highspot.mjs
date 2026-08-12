import { readFile, readdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outputDirectory = path.join(projectRoot, 'dist-highspot')
const outputFile = path.join(outputDirectory, 'index.html')

async function readOutputAsset(relativePath) {
  const normalizedPath = relativePath.replace(/^\.\//, '')
  const resolvedPath = path.resolve(outputDirectory, normalizedPath)

  if (!resolvedPath.startsWith(`${outputDirectory}${path.sep}`)) {
    throw new Error(`Refusing to inline an asset outside dist-highspot: ${relativePath}`)
  }

  return readFile(resolvedPath, 'utf8')
}

let html = await readFile(outputFile, 'utf8')

const stylesheetTagMatch = html.match(/<link\b(?=[^>]*\brel="stylesheet")[^>]*>/)
const scriptTagMatch = html.match(/<script\b(?=[^>]*\btype="module")[^>]*><\/script>/)
const stylesheetPath = stylesheetTagMatch?.[0].match(/\bhref="([^"]+)"/)?.[1]
const scriptPath = scriptTagMatch?.[0].match(/\bsrc="([^"]+)"/)?.[1]

if (!stylesheetTagMatch || !scriptTagMatch || !stylesheetPath || !scriptPath) {
  throw new Error('Could not find the Vite stylesheet and module script in dist-highspot/index.html')
}

const iconDirectory = path.join(projectRoot, 'public', 'brand', 'icons')
const iconFiles = await readdir(iconDirectory)
const [css, bundledJavaScript, logoSvg, technetLogo, iconAssets] = await Promise.all([
  readOutputAsset(stylesheetPath),
  readOutputAsset(scriptPath),
  readFile(path.join(projectRoot, 'public', 'brand', 'uipath-wordmark.svg'), 'utf8'),
  readFile(path.join(projectRoot, 'public', 'brand', 'technet-indo-pacific-2026.png')),
  Promise.all(iconFiles.map(async (fileName) => [
    fileName,
    await readFile(path.join(iconDirectory, fileName), 'utf8'),
  ])),
])

const logoDataUrl = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`
const technetLogoDataUrl = `data:image/png;base64,${technetLogo.toString('base64')}`
let portableJavaScript = bundledJavaScript
  .replaceAll('./brand/uipath-wordmark.svg', logoDataUrl)
  .replaceAll('./brand/technet-indo-pacific-2026.png', technetLogoDataUrl)
for (const [fileName, svg] of iconAssets) {
  const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
  portableJavaScript = portableJavaScript.replaceAll(`./brand/icons/${fileName}`, dataUrl)
}
const scriptDataUrl = `data:text/javascript;base64,${Buffer.from(portableJavaScript).toString('base64')}`

if (portableJavaScript.includes('./assets/')) {
  throw new Error('Highspot JavaScript still references an external build chunk')
}
if (portableJavaScript.includes('./brand/')) {
  throw new Error('Highspot JavaScript still references an external brand asset')
}

for (const match of [stylesheetTagMatch, scriptTagMatch].sort((left, right) => right.index - left.index)) {
  html = `${html.slice(0, match.index)}${html.slice(match.index + match[0].length)}`
}
html = html
  .replace('<head>', '<head>\n    <meta name="uipath-output" content="self-contained-highspot" />')
  .replace('</body>', `<style data-highspot-bundle>\n${css}\n</style>\n<script data-highspot-bundle src="${scriptDataUrl}"></script>\n  </body>`)

if (/\b(?:src|href)="\.\/assets\//.test(html)) {
  throw new Error('Highspot packaging left an external build asset in index.html')
}

await writeFile(outputFile, html, 'utf8')

console.log(`Created self-contained Highspot HTML: ${outputFile}`)
