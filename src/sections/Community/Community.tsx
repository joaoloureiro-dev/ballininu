import { motion } from 'framer-motion'

import { siteConfig } from '../../data/site'

import './Community.css'

function Community() {
    return (
        <section
            className="community"
            id="community"
            aria-labelledby="community-title"
        >
            <div className="community__inner">
                <motion.div
                    className="community__heading"
                    initial={{
                        opacity: 0,
                        y: 24,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <p className="community__eyebrow">
                        THE COMMUNITY
                    </p>

                    <h2
                        className="community__title"
                        id="community-title"
                    >
                        ENTER THE
                        <span>BALLER CLUB.</span>
                    </h2>
                </motion.div>

                <div className="community__layout">
                    <motion.div
                        className="community__copy"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >
                        <p className="community__lead">
                            BALLININU is more than a token.
                            It’s a lifestyle you ride with.
                        </p>

                        <p>
                            Join the community, follow the movement
                            and stay close to everything happening
                            around $BALLININU.
                        </p>

                        <p>
                            The crown belongs to those who show up.
                        </p>
                    </motion.div>

                    <motion.div
                        className="community__links"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            delay: 0.08,
                            duration: 0.7,
                        }}
                    >
                        <a
                            className="community__link"
                            href={
                                siteConfig.links.telegram ||
                                '#community'
                            }
                            target={
                                siteConfig.links.telegram
                                    ? '_blank'
                                    : undefined
                            }
                            rel={
                                siteConfig.links.telegram
                                    ? 'noopener noreferrer'
                                    : undefined
                            }
                        >
                            <div>
                                <span>01</span>
                                <strong>TELEGRAM</strong>
                            </div>

                            <span className="community__arrow">
                                ↗
                            </span>
                        </a>

                        <a
                            className="community__link"
                            href={
                                siteConfig.links.x ||
                                '#community'
                            }
                            target={
                                siteConfig.links.x
                                    ? '_blank'
                                    : undefined
                            }
                            rel={
                                siteConfig.links.x
                                    ? 'noopener noreferrer'
                                    : undefined
                            }
                        >
                            <div>
                                <span>02</span>
                                <strong>FOLLOW ON X</strong>
                            </div>

                            <span className="community__arrow">
                                ↗
                            </span>
                        </a>

                        <a
                            className="community__link"
                            href={
                                siteConfig.links.dexscreener ||
                                '#token'
                            }
                            target={
                                siteConfig.links.dexscreener
                                    ? '_blank'
                                    : undefined
                            }
                            rel={
                                siteConfig.links.dexscreener
                                    ? 'noopener noreferrer'
                                    : undefined
                            }
                        >
                            <div>
                                <span>03</span>
                                <strong>DEXSCREENER</strong>
                            </div>

                            <span className="community__arrow">
                                ↗
                            </span>
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="community__statement"
                    initial={{
                        opacity: 0,
                        scale: 0.98,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    <span>
                        BALLININU
                    </span>

                    <strong>
                        YOU DON’T JUST
                        HOLD THE COIN.
                        <br />
                        YOU RIDE WITH HIM.
                    </strong>
                </motion.div>
            </div>
        </section>
    )
}

export default Community