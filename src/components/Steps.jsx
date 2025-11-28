// Import step images from assets so bundler serves them
import React from 'react'
import step1 from '../assets/education_fee_step_1.png'
import step2 from '../assets/education_fee_step_2.png'
import step3 from '../assets/education_fee_step_3.png'
import step4 from '../assets/education_fee_step_4.png'
import nextImg from '../assets/next.png'

export default function Steps(){
  return (
    <section className="bg-[rgba(243,111,64,0.03)] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">How to Pay Education Fee on HappyPay?</h3>
        <div className="grid md:grid-cols-4 gap-6 items-start">
          <div className="flex flex-col items-center text-center">
            <img src={step1} alt="step1" className="w-32 md:w-36 mb-4" />
            <h6 className="font-medium">1. Search/Add your Institute/ Tutor</h6>
            <p className="text-sm text-gray-600 mt-2">Provide your Institute/Tutor Account details</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={step2} alt="step2" className="w-32 md:w-36 mb-4" />
            <h6 className="font-medium">2. Fill Student &amp; Institute/College Details</h6>
            <p className="text-sm text-gray-600 mt-2">Enter your Enrollment No and proceed</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={step3} alt="step3" className="w-32 md:w-36 mb-4" />
            <h6 className="font-medium">3. Make Payment using Multiple Payment Modes</h6>
            <p className="text-sm text-gray-600 mt-2">Choose your preferred payment mode</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={step4} alt="step4" className="w-32 md:w-36 mb-4" />
            <h6 className="font-medium">4. Transaction Successful &amp; Payment Done</h6>
            <p className="text-sm text-gray-600 mt-2">Payment gets credited to the Beneficiary's bank account.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
