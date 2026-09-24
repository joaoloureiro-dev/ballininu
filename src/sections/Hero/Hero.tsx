import { motion } from 'framer-motion'

import { siteConfig } from '../../data/site'

import './Hero.css'

function Hero() {
    return (
        <section
            className="hero"
            id="top"
            aria-labelledby="hero-title"
        >
            <div className="hero__background">
                <img
                    src="/images/ballininu-banner.png"
                    alt=""
                    aria-hidden="true"
                />
            </div>

            <div className="hero__overlay" />

            <div className="hero__inner">
                <motion.div
                    className="hero__content"
                    initial={{
                        opacity: 0,
                        y: 24,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <motion.p
                        className="hero__eyebrow"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5,
                        }}
                    >
                        THE BALLER MEME
                    </motion.p>

                    <h1
                        className="hero__title"
                        id="hero-title"
                    >
                        MORE THAN
                        <span>A MEME.</span>
                    </h1>

                    <p className="hero__tagline">
                        {siteConfig.tagline}
                    </p>

                    <p className="hero__description">
                        Built for those who move differently.
                        Luxury, culture and community — powered by BALLININU.
                    </p>

                    <div className="hero__actions">
                        <a
                            className="hero__primary"
                            href={siteConfig.links.buy || '#token'}
                            target={siteConfig.links.buy ? '_blank' : undefined}
                            rel={siteConfig.links.buy ? 'noopener noreferrer' : undefined}
                        >
                            BUY $BALLININU
                        </a>

                        <a
                            className="hero__secondary"
                            href={siteConfig.links.telegram || '#community'}
                            target={siteConfig.links.telegram ? '_blank' : undefined}
                            rel={siteConfig.links.telegram ? 'noopener noreferrer' : undefined}
                        >
                            JOIN COMMUNITY
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero__badge"
                    initial={{
                        opacity: 0,
                        scale: 0.92,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        delay: 0.35,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <span>
                        $BALLININU
                    </span>

                    <strong>
                        LIVE THE MEME
                    </strong>
                </motion.div>
            </div>

            <div className="hero__scroll">
                SCROLL TO ENTER
            </div>
        </section>
    )
}

export default Hero