import React from 'react'
import qr from '../assets/download-app-qr.png'

export default function ScanModal({ open, onClose }){
  if(!open) return null
  return (
    <div className="scan-code-section" onClick={onClose}>
      <div className="scan-code-div" onClick={(e) => e.stopPropagation()}>
        <img src={qr} alt="HappyPay scan code" className="scan-code-image" />
        <p className="scan-code-text">Scan the QR code to Download the EaseMyDeal App</p>
        <div style={{marginTop:12}}>
          <button onClick={onClose} className="slide-btn">Close</button>
        </div>
      </div>
    </div>
  )
}
