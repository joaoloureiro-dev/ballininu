import { siteConfig } from '../../data/site'

import './Footer.css'

function XIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                d="M18.244 2H21.5l-7.11 8.13L22.75 22H16.2l-5.13-6.71L5.2 22H1.94l7.6-8.69L1.52 2h6.72l4.64 6.13L18.244 2Zm-1.14 18h1.8L7.26 3.89H5.33L17.104 20Z"
                fill="currentColor"
            />
        </svg>
    )
}

function TelegramIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                d="M21.8 3.3 18.6 19c-.24 1.11-.88 1.38-1.78.86l-4.88-3.6-2.36 2.27c-.26.26-.48.48-.98.48l.35-4.97 9.05-8.18c.39-.35-.09-.55-.61-.2L6.2 12.71 1.38 11.2c-1.05-.33-1.07-1.05.22-1.55L20.45 2.4c.87-.32 1.63.2 1.35.9Z"
                fill="currentColor"
            />
        </svg>
    )
}

function DexscreenerIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                d="M4 18.5V13M9.5 18.5V9M15 18.5V5.5M20 18.5V11"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            <path
                d="M3 6.5 8 4l4 2.5 5-3 4 2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M3 20.5h18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    )
}

function Footer() {
    const socialLinks = [
        {
            label: 'BALLININU on X',
            href: siteConfig.links.x || '#',
            icon: <XIcon />,
        },
        {
            label: 'BALLININU on Telegram',
            href: siteConfig.links.telegram || '#',
            icon: <TelegramIcon />,
        },
        {
            label: 'BALLININU on Dexscreener',
            href: siteConfig.links.dexscreener || '#',
            icon: <DexscreenerIcon />,
        },
    ]

    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <div className="site-footer__brand">
                    <img
                        src="/images/ballininu-logo.png"
                        alt=""
                        className="site-footer__logo"
                    />

                    <div>
                        <strong>
                            BALLININU
                        </strong>

                        <span>
                            More than a meme.
                            It’s a lifestyle.
                        </span>
                    </div>
                </div>

                <div
                    className="site-footer__socials"
                    aria-label="BALLININU social links"
                >
                    {socialLinks.map((social) => {
                        const isActive =
                            social.href !== '#'

                        return (
                            <a
                                key={social.label}
                                href={social.href}
                                target={
                                    isActive
                                        ? '_blank'
                                        : undefined
                                }
                                rel={
                                    isActive
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                                aria-label={social.label}
                                className={
                                    !isActive
                                        ? 'site-footer__social--disabled'
                                        : undefined
                                }
                                onClick={(event) => {
                                    if (!isActive) {
                                        event.preventDefault()
                                    }
                                }}
                            >
                                {social.icon}
                            </a>
                        )
                    })}
                </div>

                <p className="site-footer__copyright">
                    © 2026 BALLININU
                </p>
            </div>
        </footer>
    )
}

export default Footer