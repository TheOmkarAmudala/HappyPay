import React from 'react'
import appImage from '../assets/app-image.png'

export default function Footer(){
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Inditab Esolutions Private Limited</h3>
            <p className="text-sm text-gray-600 mt-2">G-31, SF, Nr. FedBank Financial Services, Noida Sector 3, Noida, Uttar Pradesh 201301</p>
            <a href="mailto:support@easemydeal.com" className="text-sm text-theme block mt-2">support@easemydeal.com</a>
          </div>

          <div>
            <h3 className="text-lg font-semibold">HappyPay</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li><a href="https://www.easemydeal.education/about-us" target="_blank" rel="noreferrer" className="hover:text-theme">About Us</a></li>
              <li><a href="https://www.easemydeal.education/privacy-policy" target="_blank" rel="noreferrer" className="hover:text-theme">Privacy Policy</a></li>
              <li><a href="https://www.easemydeal.education/contact-us" target="_blank" rel="noreferrer" className="hover:text-theme">Contact Us</a></li>
              <li><a href="https://www.easemydeal.education/terms-and-conditions" target="_blank" rel="noreferrer" className="hover:text-theme">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Download HappyPay App</h3>
            <div className="mt-4">
              <a href="https://www.easemydeal.com/download-app" className="inline-block">
                <img src={appImage} alt="Easemydeal Qr" className="w-36 h-auto" />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-4">
          <p>INDITAB ESOLUTIONS PVT LIMITED 2017-2024 | ALL RIGHTS RESERVED</p>
          <div className="flex items-center gap-3">
            <span className="inline-block w-10 h-6 bg-gray-200 rounded" />
            <span className="inline-block w-10 h-6 bg-gray-200 rounded" />
            <span className="inline-block w-10 h-6 bg-gray-200 rounded" />
            <span className="inline-block w-10 h-6 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </footer>
  )
}
