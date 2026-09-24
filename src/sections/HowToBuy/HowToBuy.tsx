import { motion } from 'framer-motion'

import { siteConfig } from '../../data/site'

import './HowToBuy.css'

const steps = [
    {
        number: '01',
        title: 'GET A WALLET',
        text: 'Set up a compatible wallet and make sure you are connected to the correct network.',
    },
    {
        number: '02',
        title: 'FUND YOUR WALLET',
        text: 'Add the native token you need for the swap and keep a little extra for network fees.',
    },
    {
        number: '03',
        title: 'BUY $BALLININU',
        text: 'Open the official swap link, paste the verified contract address and complete the trade.',
    },
]

function HowToBuy() {
    const buyHref =
        siteConfig.links.buy || '#token'

    return (
        <section
            className="how-to-buy"
            id="how-to-buy"
            aria-labelledby="how-to-buy-title"
        >
            <div className="how-to-buy__inner">
                <motion.div
                    className="how-to-buy__heading"
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
                    <p className="how-to-buy__eyebrow">
                        HOW TO BUY
                    </p>

                    <h2
                        className="how-to-buy__title"
                        id="how-to-buy-title"
                    >
                        GET IN.
                        <span>START BALLIN’.</span>
                    </h2>
                </motion.div>

                <div className="how-to-buy__steps">
                    {steps.map(
                        (
                            step,
                            index,
                        ) => (
                            <motion.article
                                className="how-to-buy__step"
                                key={step.number}
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
                                    amount: 0.3,
                                }}
                                transition={{
                                    delay:
                                        index *
                                        0.08,
                                    duration: 0.6,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1,
                                    ],
                                }}
                            >
                                <span className="how-to-buy__number">
                                    {step.number}
                                </span>

                                <div className="how-to-buy__step-copy">
                                    <h3>
                                        {step.title}
                                    </h3>

                                    <p>
                                        {step.text}
                                    </p>
                                </div>
                            </motion.article>
                        ),
                    )}
                </div>

                <motion.div
                    className="how-to-buy__cta"
                    initial={{
                        opacity: 0,
                        y: 18,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    <div>
                        <span>
                            READY TO MOVE?
                        </span>

                        <strong>
                            BE BALLIN’
                            <br />
                            OR STAY HOME.
                        </strong>
                    </div>

                    <a
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
                    >
                        BUY $BALLININU
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default HowToBuy