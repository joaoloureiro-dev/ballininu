import { motion } from 'framer-motion'

import { siteConfig } from '../../data/site'

import './Header.css'

function Header() {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <a
                    className="site-header__brand"
                    href="#top"
                    aria-label="BALLININU home"
                >
                    <img
                        className="site-header__logo"
                        src="/images/ballininu-logo.png"
                        alt="BALLININU"
                    />

                    <span>
                        BALLININU
                    </span>
                </a>

                <nav
                    className="site-header__nav"
                    aria-label="Primary navigation"
                >
                    <a href="#about">
                        ABOUT
                    </a>

                    <a href="#token">
                        TOKEN
                    </a>

                    <a href="#how-to-buy">
                        HOW TO BUY
                    </a>

                    <a href="#community">
                        COMMUNITY
                    </a>
                </nav>

                <motion.a
                    className="site-header__cta"
                    href={siteConfig.links.buy || '#token'}
                    target={siteConfig.links.buy ? '_blank' : undefined}
                    rel={siteConfig.links.buy ? 'noopener noreferrer' : undefined}
                    whileHover={{
                        y: -2,
                    }}
                    whileTap={{
                        y: 0,
                    }}
                >
                    BUY
                </motion.a>
            </div>
        </header>
    )
}

export default Header