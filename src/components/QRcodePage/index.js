import React from 'react'
import './styles.css'
var QRCode = require('qrcode.react');

const QRCodePage = () => {
  return(
    <div className='qr-page'>
      <h1>QRCODE</h1>
      <QRCode className='qr-code' value='http://localhost:3000/selectedResources'/>
    </div>
  )
}

export default QRCodePage