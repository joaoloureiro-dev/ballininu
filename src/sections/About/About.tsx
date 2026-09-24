import { motion } from 'framer-motion'

import './About.css'

function About() {
    return (
        <section
            className="about"
            id="about"
            aria-labelledby="about-title"
        >
            <div className="about__inner">
                <motion.div
                    className="about__intro"
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
                    <p className="about__eyebrow">
                        THE LORE
                    </p>

                    <h2
                        className="about__title"
                        id="about-title"
                    >
                        HE STOPPED
                        <span>WAITING.</span>
                    </h2>
                </motion.div>

                <div className="about__layout">
                    <motion.div
                        className="about__story"
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
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <p className="about__lead">
                            BALLININU isn’t just another Shiba.
                        </p>

                        <p>
                            He watched Doge and SHIB blow up…
                            then decided cute wasn’t enough.
                        </p>

                        <p>
                            He went all-in: Gucci jacket,
                            gold chain, black Lambo,
                            city skyline behind him.
                        </p>

                        <p>
                            BALLININU is the Inu who stopped
                            waiting and started ballin’.
                        </p>

                        <p>
                            The crown isn’t decoration —
                            he’s the self-made king
                            of the ballers.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about__manifesto"
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
                            amount: 0.2,
                        }}
                        transition={{
                            delay: 0.08,
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <span>
                            THE BALLER CODE
                        </span>

                        <strong>
                            YOU DON’T JUST
                            <br />
                            HOLD THE COIN.
                        </strong>

                        <p>
                            You ride with him.
                        </p>

                        <div className="about__closing">
                            BE BALLIN’
                            <br />
                            OR STAY HOME.
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About