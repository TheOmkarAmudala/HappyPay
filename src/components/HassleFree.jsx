import React from 'react'
import contentImg from '../assets/content.png'

export default function HassleFree(){
  return (
    <section className="bg-[#fffbf9] py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-semibold mb-4">Hassle-Free <span className="font-bold">Education/Tuition Fees Payment</span> On HappyPay</h3>
          <div className="text-gray-700 space-y-4">
            <p>Paying education fees is now easier with Easemydeal. Our online platform allows you to pay school, college, and tuition fees quickly using multiple payment options. You can make payments directly to educational institutions without stress or complicated processes.</p>
            <p>The user-friendly website makes fee payments simple and secure. You'll get instant transaction processing and clear records of all payments. Whether you need to pay one-time or recurring fees, HappyPay removes the typical challenges of managing education expenses.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img src={contentImg} alt="content" className="rounded-xl shadow-lg w-full max-w-md object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
