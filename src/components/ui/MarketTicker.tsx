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
                    label: 'TOKEN',
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
     * Cada set contém várias cópias
     * dos dados para garantir que é
     * sempre mais largo que o viewport.
     */
    const repeatedItems =
        Array.from(
            {
                length: 6,
            },
            () => tickerItems,
        ).flat()

    function renderTickerSet(
        setId: number,
    ) {
        return (
            <div
                className="market-ticker__set"
                aria-hidden={
                    setId === 1
                        ? undefined
                        : true
                }
            >
                {repeatedItems.map(
                    (item, index) => (
                        <div
                            className="market-ticker__item"
                            key={`${setId}-${item.label}-${index}`}
                        >
                            <span className="market-ticker__label">
                                {item.label}
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
                                    .join(' ')}
                            >
                                {item.value}
                            </strong>

                            <span
                                className="market-ticker__dot"
                                aria-hidden="true"
                            />
                        </div>
                    ),
                )}
            </div>
        )
    }

    return (
        <div
            className="market-ticker"
            aria-label="BALLININU live market data"
        >
            <div
                className="market-ticker__fade market-ticker__fade--left"
                aria-hidden="true"
            />

            <div className="market-ticker__viewport">
                <div className="market-ticker__track">
                    {renderTickerSet(1)}

                    {renderTickerSet(2)}
                </div>
            </div>

            <div
                className="market-ticker__fade market-ticker__fade--right"
                aria-hidden="true"
            />
        </div>
    )
}

export default MarketTicker