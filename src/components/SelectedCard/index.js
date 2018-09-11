import React from 'react'

const SelectedCard = (props) => {
  return (
  <div>
    <article className='searched-card'>
      <div className='card-title'>
        <h2>{props.Type}</h2>
        <h2>{props.Name}</h2>
      </div>
      <div className='card-info'>
        <div className='card-description'> 
          <p>{props.wTeaser}</p>
        </div>
        <div className='card-links'>
          <p>{props.yUrl}</p>
          <p>{props.wUrl}</p>
        </div>
      </div>
    </article>
    <button>Submit for QR Code</button>
  </div>
  )
}

export default SelectedCard