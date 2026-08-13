import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  action?: ReactNode
  align?: 'left' | 'center'
  titleId?: string
}

export function SectionHeading({ eyebrow, title, description, action, align = 'left', titleId }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={titleId}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </div>
  )
}
