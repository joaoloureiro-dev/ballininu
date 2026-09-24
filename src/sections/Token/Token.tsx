import { motion } from 'framer-motion'

import { siteConfig } from '../../data/site'

import './Token.css'

function Token() {
    const contract =
        siteConfig.contractAddress ||
        'CONTRACT ADDRESS COMING SOON'

    async function copyContract() {
        if (!siteConfig.contractAddress) {
            return
        }

        await navigator.clipboard.writeText(
            siteConfig.contractAddress,
        )
    }

    return (
        <section
            className="token"
            id="token"
            aria-labelledby="token-title"
        >
            <div className="token__inner">
                <motion.div
                    className="token__heading"
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
                    <p className="token__eyebrow">
                        THE TOKEN
                    </p>

                    <h2
                        className="token__title"
                        id="token-title"
                    >
                        BUILT FOR
                        <span>BALLERS.</span>
                    </h2>
                </motion.div>

                <div className="token__layout">
                    <motion.div
                        className="token__intro"
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
                        }}
                    >
                        <p>
                            $BALLININU is the currency
                            of the baller lifestyle.
                        </p>

                        <span>
                            No waiting.
                            <br />
                            No watching from the sidelines.
                            <br />
                            You ride with him.
                        </span>
                    </motion.div>

                    <motion.div
                        className="token__specs"
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
                            delay: 0.08,
                            duration: 0.7,
                        }}
                    >
                        <div className="token__row">
                            <span>NAME</span>

                            <strong>
                                BALLININU
                            </strong>
                        </div>

                        <div className="token__row">
                            <span>TICKER</span>

                            <strong>
                                $BALLININU
                            </strong>
                        </div>

                        <div className="token__row">
                            <span>CHAIN</span>

                            <strong>
                                TBA
                            </strong>
                        </div>

                        <div className="token__row">
                            <span>SUPPLY</span>

                            <strong>
                                TBA
                            </strong>
                        </div>

                        <div className="token__row">
                            <span>LIQUIDITY</span>

                            <strong>
                                TBA
                            </strong>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="token__contract"
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
                        delay: 0.1,
                        duration: 0.7,
                    }}
                >
                    <div className="token__contract-copy">
                        <span>
                            CONTRACT ADDRESS
                        </span>

                        <strong>
                            {contract}
                        </strong>
                    </div>

                    <button
                        type="button"
                        className="token__copy"
                        onClick={copyContract}
                        disabled={
                            !siteConfig.contractAddress
                        }
                    >
                        COPY
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Token