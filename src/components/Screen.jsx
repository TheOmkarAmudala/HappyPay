import React from 'react'

export default function Screen() {
    return (
        <div className="max-w-3xl mx-auto p-6 text-center bg-white rounded-xl shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">For the best experience, please use a mobile device to access this site.</h2>
            <p className="text-gray-600 mb-4">Download our app from the link below:</p>
            <a href="https://www.easemydeal.com/download-app" className="inline-block bg-theme text-white px-5 py-2 rounded-md">Download App</a>
        </div>
    )
}