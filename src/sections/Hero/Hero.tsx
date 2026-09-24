import { motion } from 'framer-motion'

import { siteConfig } from '../../data/site'

import './Hero.css'

function Hero() {
    const buyHref =
        siteConfig.links.buy || '#token'

    const communityHref =
        siteConfig.links.telegram ||
        '#community'

    return (
        <section
            className="hero"
            id="top"
            aria-labelledby="hero-title"
        >
            <div className="hero__frame">
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
                            y: 22,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                    >
                        <p className="hero__eyebrow">
                            THE BALLER MEME
                        </p>

                        <h1
                            className="hero__title"
                            id="hero-title"
                        >
                            MORE THAN

                            <span>
                                A MEME.
                            </span>
                        </h1>

                        <p className="hero__tagline">
                            {
                                siteConfig.tagline
                            }
                        </p>

                        <p className="hero__description">
                            Luxury, culture and
                            community built around
                            one iconic lifestyle.
                        </p>

                        <div className="hero__actions">
                            <a
                                className="hero__primary"
                                href={buyHref}
                                target={
                                    siteConfig.links
                                        .buy
                                        ? '_blank'
                                        : undefined
                                }
                                rel={
                                    siteConfig.links
                                        .buy
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                            >
                                BUY $BALLININU
                            </a>

                            <a
                                className="hero__secondary"
                                href={
                                    communityHref
                                }
                                target={
                                    siteConfig.links
                                        .telegram
                                        ? '_blank'
                                        : undefined
                                }
                                rel={
                                    siteConfig.links
                                        .telegram
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                            >
                                JOIN COMMUNITY
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero__signature"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.4,
                            duration: 0.7,
                        }}
                    >
                        <span>
                            $BALLININU
                        </span>

                        <strong>
                            LIVE THE
                            <br />
                            LIFESTYLE.
                        </strong>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero