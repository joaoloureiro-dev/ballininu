import { motion } from 'framer-motion'

import { siteConfig } from '../../data/site'

import './Header.css'

function Header() {
    const buyHref =
        siteConfig.links.buy || '#token'

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
                        alt=""
                    />

                    <span className="site-header__name">
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
                    href={buyHref}
                    target={
                        siteConfig.links.buy
                            ? '_blank'
                            : undefined
                    }
                    rel={
                        siteConfig.links.buy
                            ? 'noopener noreferrer'
                            : undefined
                    }
                    whileTap={{
                        scale: 0.97,
                    }}
                >
                    BUY
                </motion.a>
            </div>
        </header>
    )
}

export default Header