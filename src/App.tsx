import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MarketTicker from './components/ui/MarketTicker'

import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Token from './sections/Token/Token'
import HowToBuy from './sections/HowToBuy/HowToBuy'
import Community from './sections/Community/Community'

function App() {
  return (
    <>
      <MarketTicker />

      <Header />

      <main>
        <Hero />
        <About />
        <Token />
        <HowToBuy />
        <Community />
      </main>

      <Footer />
    </>
  )
}

export default App