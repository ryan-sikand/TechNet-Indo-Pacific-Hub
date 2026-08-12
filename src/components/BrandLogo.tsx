type BrandLogoProps = {
  className?: string
  variant?: 'default' | 'footer'
}

export function BrandLogo({ className = '', variant = 'default' }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo--${variant} ${className}`.trim()}>
      <img src={`${import.meta.env.BASE_URL}brand/uipath-wordmark.svg`} alt="UiPath" />
    </span>
  )
}
