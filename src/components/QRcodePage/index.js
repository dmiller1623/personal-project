import React from 'react'
var QRCode = require('qrcode.react');

const QRCodePage = () => {
  return(
    <div>
      <h1>QRCODE</h1>
      <QRCode value='http://localhost:3000/selectedResources'/>
    </div>
  )
}

export default QRCodePage