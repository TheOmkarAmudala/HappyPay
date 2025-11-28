import React from 'react'
import creditScore from '../assets/credit-score.png'
import bankImg from '../assets/bank.png'
import boostImg from '../assets/boost.png'
import paymentImg from '../assets/payment.png'

export default function Benefits({ onOpenScan }){
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:items-start md:gap-12">
          <div className="md:w-1/3">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Benefits of Paying Education/ Tuition Fees via <span className="text-theme">HapyPay
            </span></h3>
            <p className="text-gray-600 mb-6">EaseMyDeal revolutionize educational fee payments, offering students unparalleled financial flexibility. By transforming tuition expenses into manageable installments, these payment methods unlock instant rewards, build credit history, and provide robust transaction security.</p>
            <button type="button" onClick={onOpenScan} className="bg-theme text-white px-5 py-2 rounded-md">Download App</button>
          </div>

          <div className="md:w-2/3 mt-8 md:mt-0 grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start">
              <img src={creditScore} alt="credit-score" className="w-12 h-12" />
              <div>
                <h6 className="font-semibold">Financial Flexibility</h6>
                <p className="text-gray-600 text-sm mt-1">Split large education expenses into manageable monthly payments, reducing the immediate financial burden.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start">
              <img src={bankImg} alt="bank" className="w-12 h-12" />
              <div>
                <h6 className="font-semibold">Reward Points and Cashback</h6>
                <p className="text-gray-600 text-sm mt-1">Earn credit card rewards, points, and cashback on every payment, maximizing the value of your transactions.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start">
              <img src={boostImg} alt="boost" className="w-12 h-12" />
              <div>
                <h6 className="font-semibold">Instant Payments</h6>
                <p className="text-gray-600 text-sm mt-1">Avoid late fees or penalties by making quick, real-time payments directly to the educational institution.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start">
              <img src={paymentImg} alt="payment" className="w-12 h-12" />
              <div>
                <h6 className="font-semibold">Build Credit History</h6>
                <p className="text-gray-600 text-sm mt-1">Regular and timely payments contribute positively to your credit score, helping build a strong credit history.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
