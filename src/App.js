import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import Steps from './components/Steps'
import Benefits from './components/Benefits'
import HassleFree from './components/HassleFree'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ScanModal from './components/ScanModal'

export default function App(){
  const [showScan, setShowScan] = useState(false)

  const openScan = () => setShowScan(true)
  const closeScan = () => setShowScan(false)

  return (
      <div>

        <Header />
        <Hero onOpenScan={openScan} />
        <WhySection />
        <Steps />
        <Benefits onOpenScan={openScan} />
        <HassleFree />
        <FAQ />
        <div className="payRentBtn">
          <a href="https://www.easemydeal.com/download-app" className="slide-btn2">Download App</a>
        </div>
        <Footer />

        <ScanModal open={showScan} onClose={closeScan} />
      </div>
  )
}
