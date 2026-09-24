import {
    useEffect,
    useMemo,
    useState,
} from 'react'

import { siteConfig } from '../../data/site'

import './MarketTicker.css'

type DexPair = {
    priceUsd?: string

    priceChange?: {
        h24?: number
    }

    volume?: {
        h24?: number
    }

    liquidity?: {
        usd?: number
    }

    marketCap?: number
    fdv?: number
}

type DexResponse = {
    pairs?: DexPair[]
}

type TickerItem = {
    label: string
    value: string
    variant?: 'positive' | 'negative'
}

function formatUsd(value?: number) {
    if (
        value === undefined ||
        value === null
    ) {
        return '—'
    }

    if (value >= 1_000_000_000) {
        return `$${(
            value /
            1_000_000_000
        ).toFixed(2)}B`
    }

    if (value >= 1_000_000) {
        return `$${(
            value /
            1_000_000
        ).toFixed(2)}M`
    }

    if (value >= 1_000) {
        return `$${(
            value /
            1_000
        ).toFixed(2)}K`
    }

    return `$${value.toFixed(2)}`
}

function formatPrice(price?: string) {
    if (!price) {
        return '—'
    }

    const number = Number(price)

    if (Number.isNaN(number)) {
        return '—'
    }

    if (number >= 1) {
        return `$${number.toLocaleString(
            'en-US',
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 4,
            },
        )}`
    }

    return `$${number.toLocaleString(
        'en-US',
        {
            maximumFractionDigits: 10,
        },
    )}`
}

function MarketTicker() {
    const [pair, setPair] =
        useState<DexPair | null>(null)

    useEffect(() => {
        if (!siteConfig.contractAddress) {
            return
        }

        let mounted = true

        async function loadMarketData() {
            try {
                const response = await fetch(
                    `https://api.dexscreener.com/latest/dex/tokens/${siteConfig.contractAddress}`,
                )

                if (!response.ok) {
                    throw new Error(
                        'Unable to fetch market data',
                    )
                }

                const data =
                    (await response.json()) as DexResponse

                if (
                    !mounted ||
                    !data.pairs?.length
                ) {
                    return
                }

                const bestPair = [
                    ...data.pairs,
                ].sort(
                    (a, b) =>
                        (b.liquidity?.usd ?? 0) -
                        (a.liquidity?.usd ?? 0),
                )[0]

                setPair(bestPair)
            } catch (error) {
                console.error(
                    'BALLININU market data error:',
                    error,
                )
            }
        }

        loadMarketData()

        const interval =
            window.setInterval(
                loadMarketData,
                30_000,
            )

        return () => {
            mounted = false

            window.clearInterval(
                interval,
            )
        }
    }, [])

    const tickerItems =
        useMemo<TickerItem[]>(() => {
            const change =
                pair?.priceChange?.h24

            return [
                {
                    label: 'BALLININU',
                    value: '$BALLININU',
                },
                {
                    label: 'PRICE',
                    value: formatPrice(
                        pair?.priceUsd,
                    ),
                },
                {
                    label: '24H',
                    value:
                        change !== undefined
                            ? `${change > 0 ? '+' : ''}${change.toFixed(2)}%`
                            : '—',
                    variant:
                        change === undefined
                            ? undefined
                            : change >= 0
                                ? 'positive'
                                : 'negative',
                },
                {
                    label: 'MARKET CAP',
                    value: formatUsd(
                        pair?.marketCap ??
                        pair?.fdv,
                    ),
                },
                {
                    label: 'VOLUME 24H',
                    value: formatUsd(
                        pair?.volume?.h24,
                    ),
                },
                {
                    label: 'LIQUIDITY',
                    value: formatUsd(
                        pair?.liquidity?.usd,
                    ),
                },
            ]
        }, [pair])

    /*
     * Four identical groups.
     * Moving -25% gives us one
     * complete seamless cycle.
     */
    const groups = [0, 1, 2, 3]

    return (
        <div
            className="market-ticker"
            aria-label="BALLININU live market data"
        >
            <div className="market-ticker__fade market-ticker__fade--left" />

            <div className="market-ticker__viewport">
                <div className="market-ticker__track">
                    {groups.map(
                        (group) => (
                            <div
                                className="market-ticker__group"
                                key={group}
                                aria-hidden={
                                    group !== 0
                                }
                            >
                                {tickerItems.map(
                                    (
                                        item,
                                        index,
                                    ) => (
                                        <div
                                            className="market-ticker__item"
                                            key={`${group}-${item.label}-${index}`}
                                        >
                                            <span className="market-ticker__label">
                                                {
                                                    item.label
                                                }
                                            </span>

                                            <strong
                                                className={[
                                                    'market-ticker__value',

                                                    item.variant
                                                        ? `market-ticker__value--${item.variant}`
                                                        : '',
                                                ]
                                                    .filter(
                                                        Boolean,
                                                    )
                                                    .join(
                                                        ' ',
                                                    )}
                                            >
                                                {
                                                    item.value
                                                }
                                            </strong>

                                            <span
                                                className="market-ticker__dot"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    ),
                                )}
                            </div>
                        ),
                    )}
                </div>
            </div>

            <div className="market-ticker__fade market-ticker__fade--right" />
        </div>
    )
}

export default MarketTicker