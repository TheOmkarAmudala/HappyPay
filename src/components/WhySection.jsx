import React from 'react'
import whyImg from '../assets/why.png'
import convenience from '../assets/convenience.png'
import rewards from '../assets/rewards.png'
import easyImg from '../assets/easy.png'

export default function WhySection(){
  return (
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img src={whyImg} alt="Why HappyPay" className="w-full h-auto rounded-2xl shadow-lg object-cover" loading="lazy" />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Why Choose HappyPay for Education/Tuition Fee Payments <span className="text-theme">?</span></h2>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <img src={convenience} alt="convenience" className="w-10 h-10 flex-shrink-0" loading="lazy" />
                <div>
                  <h5 className="text-lg font-semibold text-gray-900">Convenient and Flexible Payments</h5>
                  <p className="text-gray-600 mt-1">Pay Tuition / College / Institute / Coaching / School Fee easily with multiple payment options.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <img src={rewards} alt="rewards" className="w-10 h-10 flex-shrink-0" loading="lazy" />
                <div>
                  <h5 className="text-lg font-semibold text-gray-900">Quick and Hassle-Free Process</h5>
                  <p className="text-gray-600 mt-1">The user-friendly platform allows you to pay education fees in a few simple steps, saving time and effort.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <img src={easyImg} alt="easy" className="w-10 h-10 flex-shrink-0" loading="lazy" />
                <div>
                  <h5 className="text-lg font-semibold text-gray-900">Competitive Processing Fees</h5>
                  <p className="text-gray-600 mt-1">Enjoy affordable and competitive processing charges starting at minimal fee for your education fee payments.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}
