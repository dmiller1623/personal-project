import React from 'react'
import './styles.css'
import addSvg from '../../images/plus.svg'

const SearchedCard = (props) => {
  return (
    <article className='searched-card'>
      <div className='card-title'>
        <h2>{props.Type}:</h2>
        <h2>{props.Name}</h2>
        <img src={addSvg} className='add-button' alt='add button svg' onClick={() => props.addResources(props)}/>
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
  )
}

export default SearchedCard