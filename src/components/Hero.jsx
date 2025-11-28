import React from 'react'
import heroImg from '../assets/hero.png'

export default function Hero({ onOpenScan }) {
  const bgStyle = {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '90vh',
  }


  return (
      <section className="text-black" style={bgStyle}>
        <div className="max-w-6xl mx-auto  px-6 sm:px-8 lg:px-16 aliign-middle py-32 sm:py-40">

          <div className="flex flex-col items-start  ">

            <h2 className="text-left text-3xl sm:text-4xl md:text-5xl text-white leading-tight sm:w-[40vw] w-[60vw] font-semibold">
              Pay Tuition or Education Fees with <span className="text-theme">HappyPay</span>
            </h2>

            <p className="text-left mt-6 text-lg sm:text-xl  sm:w-[40vw] w-[60vw] text-white">
              Start Paying Tuition, College, Institute, or Coaching Fees with HappyPay
            </p>


            <button
                type="button"
                className="mt-8 bg-theme text-white px-8 py-3 rounded-lg hover:opacity-95 transition"
                onClick={onOpenScan}
            >

              Pay Now
            </button>

          </div>

        </div>
      </section>
  )
}
