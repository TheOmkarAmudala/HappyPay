import React from 'react'
import logo from '../assets/logo.png'

export default function Header(){
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Easemydeal Logo" className="w-36 h-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#" className="hover:text-theme">Home</a>
          <a href="#" className="hover:text-theme">How it Works</a>
          <a href="#" className="hover:text-theme">Benefits</a>
          <a href="#" className="hover:text-theme">Contact</a>
        </nav>
      </div>
    </header>
  )
}
