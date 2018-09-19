import React from 'react';
import './styles.css';
var QRCode = require('qrcode.react');

const QRCodePage = () => {
  return (
    <div className='qr-page'>
      <h1>QRCODE</h1>
      <QRCode className='qr-code' value='https://outsourced.herokuapp.com/selectedResources'/>
    </div>
  );
};

export default QRCodePage;