import Header from './components/layout/Header'
import MarketTicker from './components/ui/MarketTicker'

import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Token from './sections/Token/Token'

function App() {
  return (
    <>
      <MarketTicker />

      <Header />

      <main>
        <Hero />
        <About />
        <Token />
      </main>
    </>
  )
}

export default App