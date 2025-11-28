import React, { useState } from 'react'

const faqItems = [
  { q: 'How can I pay my education or tuition fees using Easemydeal?', a: "Download EaseMyDeal, select the \"Education Fee\" option, provide the Tutor's/institution’s details, and complete the payment using your Multiple Payment Options." },
  { q: 'What types of education fees can I pay through Easemydeal?', a: 'You can pay school fees, college, insitute, tuition, coaching fees, using Easemydeal.' },
  { q: 'Can I pay education fees for any institution?', a: 'Yes, Easemydeal supports payments to all educational institutions, if not listed you can make payment direct to bank provided you have their bank account details.' },
  { q: 'What are the benefits of paying education fees with  Easemydeal?', a: 'Benefits include earning credit card rewards, cashback, interest-free periods, and the convenience of splitting large fees into smaller installments.' },
  { q: 'Is there a fee for paying education fees  on Easemydeal?', a: 'Yes, a small processing fee is applicable on payment done on EaseMyDeal.' },
  { q: 'How long does it take for the payment to reach the institution?', a: 'Payments are usually processed instantly or within 1-3 business days, depending on the bank and mode selected.' },
  { q: 'Can I set up recurring payments for tuition fees on Easemydeal?', a: "No, Easemydeal doesn't allows you to schedule recurring payments for monthly." },
  { q: 'Are payments made through Easemydeal secure?', a: 'Absolutely! Easemydeal uses advanced encryption and secure gateways to ensure your transactions are safe.' },
  { q: 'What should I do if my payment fails or is delayed?', a: 'Contact Easemydeal’s customer support team at +91-8860006106 for assistance with failed or delayed transactions.' }
]

export default function FAQ(){
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">Frequently Asked <span className="font-bold">Questions</span> on Education Fees with HappyPay</h3>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full text-left px-4 py-3 bg-white flex items-center justify-between gap-4"
            >
              <span className="font-medium">{idx+1}. {item.q}</span>
              <span className={`transform transition-transform ${openFaq === idx ? 'rotate-45' : ''}`}>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              </span>
            </button>
            <div className={`${openFaq === idx ? 'max-h-screen py-4' : 'max-h-0'} px-4 overflow-hidden transition-all duration-300 bg-gray-50`}>
              <div className="text-gray-700">{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
