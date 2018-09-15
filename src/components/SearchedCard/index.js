import React from 'react'
import './styles.css'
import addSvg from '../../images/plus.svg'
import ShowMoreText from 'react-show-more-text';
import YouTube from 'react-youtube';

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
        <ShowMoreText>{props.wTeaser}</ShowMoreText>
        </div>
        <div className='card-links'>
        {props.yUrl &&
         <YouTube
            className='youtube-video'
            videoId={props.yUrl.slice(39, 50)}
            opts={{
              height: '300',
              width: '300',
              autoplay: 1
            }}
          />}
          <p>{props.wUrl}</p>
        </div>
      </div>
    </article>
  )
}

export default SearchedCard