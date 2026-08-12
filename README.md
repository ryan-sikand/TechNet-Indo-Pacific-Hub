# TechNet Indo-Pacific Hub

Customer-facing UiPath field guide for AFCEA TechNet Indo-Pacific 2026. The site maps agentic automation and orchestration capabilities to PACOM and PACFLT J/N staff functions, provides a small public resource library, and routes meeting requests to UiPath public-sector contacts.

## Run, test, and build

```powershell
npm install
npm run dev
npm test
npm run build
```

`npm run build` creates the hosted Coded Web App payload in `dist/`. `npm run build:highspot` creates a self-contained, hash-routed file at `dist-highspot/index.html` that can be opened directly from disk or uploaded as a portable HTML asset.

## Design adaptation

The app is a separate implementation informed by the Coding Agents Guide reference project. It adapts that project's Vite/React/TypeScript stack, editorial typography, spacing rhythm, card language, sticky navigation, mobile drawer, responsive breakpoints, and UiPath Labs Coded Web App deployment pattern. Its personal branding, tutorial copy, scroll-only navigation, and project-specific components were not copied.

## Content editing

The shared source model lives in `src/content/`:

| Change | File |
| --- | --- |
| Event name, date, location, metadata, and event link | `event.ts` |
| J/N directorates, mappings, summaries, and use cases | `directorates.ts` |
| Canonical capabilities and directorate-specific framing | `capabilities.ts` |
| Customer-facing assets and placeholders | `resources.ts` |
| Approved proof-point slots | `proofPoints.ts` |
| Meeting contacts and optional booking links | `contacts.ts` |
| Header navigation | `navigation.ts` |

Add or remove resources in `resources.ts`; cards and filters update from the model. To replace a contact's prepopulated email action, set its optional `bookingUrl`. No component change is required.

Reusable interfaces are in `src/types.ts`. Pages resolve content through `src/content/index.ts`; avoid putting campaign copy directly in components.

## Brand assets

The approved local UiPath wordmark is stored at `public/brand/uipath-wordmark.svg` and used by the shared header and footer logo component. Keep future public images under `public/` so both output targets can bundle them.

## Routing and output targets

The public build uses shareable history routes such as `/jn/j2-n2`, `/capabilities/entity-resolution`, `/resources`, and `/meet`. Hosting-base detection keeps those routes under the deployed UiPath host path. Highspot mode uses hash routes so a future portable package does not depend on server rewrites.

The `build:highspot` task runs the same content and UI build in hash-routing mode, then inlines the JavaScript, CSS, and UiPath logo into `dist-highspot/index.html`. It does not iframe or depend on the public site. Open that generated file—not the source-level root `index.html` or hosted `dist/index.html`—when testing directly from disk.

Meeting email actions open in a separate browsing context so Highspot's sandboxed viewer stays intact while the browser launches the visitor's configured mail app. After any source change, rebuild and upload the newly generated `dist-highspot/index.html`; an earlier Highspot upload will not update automatically.

## UiPath Labs Playground deployment

Target: UiPath Labs staging, organization `uipathlabs`, tenant `Playground`, shared Playground folder. This matches the tenant-feed deployment pattern used by the reference app and avoids a current staging issue downloading Coded Web App packages from Personal Workspace feeds.

Deployment uses the saved `acebounce-staging` profile and the UiPath Coded Apps sequence:

```powershell
uip --profile acebounce-staging login status --output json
uip --profile acebounce-staging codedapp pack dist --name technet-indo-pacific-hub --version 1.0.3 --description "UiPath at TechNet Indo-Pacific 2026" --output json
uip --profile acebounce-staging codedapp publish --name technet-indo-pacific-hub --version 1.0.3 --type Web --output json
$folderKey = uip --profile acebounce-staging or folders list --all --name "Shared" --output json | ConvertFrom-Json | ForEach-Object { $_.Data[0].Key }
uip --profile acebounce-staging codedapp deploy --name technet-indo-pacific-hub --path-name technet-indo-pacific-2026 --folder-key $folderKey --output json
```

Public staging URL: `https://uipathlabs.staging.uipath.host/technet-indo-pacific-2026`

For a redeploy, increment the version in `package.json` and in the pack/publish commands, then build, pack, publish, and deploy again. Do not commit tokens or browser-side secrets.

## Next content pass

Populate the files under `src/content/`, replace placeholder resource records with approved external assets, add approved proof points, add contact booking URLs when available, and add public-safe thumbnails under `public/`. Re-run both builds after content changes and verify any new local media is included by the Highspot packager.
