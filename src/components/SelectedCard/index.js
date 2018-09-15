import React from 'react'
import minusSvg from '../../images/minus-symbol.svg'
import './styles.css'
import ShowMoreText from 'react-show-more-text';
import YouTube from 'react-youtube';


const SelectedCard = (props) => {
  return (
    <article className='selected-card'>
      <div className='card-title'>
        <h2>{props.Type}:</h2>
        <h2>{props.Name}</h2>
        <img src={minusSvg} className='minus-button' alt='delete button' onClick={() => props.deleteResources(props)}/>
      </div>
      <div className='card-info'>
      <div className='card-description'> 
        <ShowMoreText>{props.wTeaser}</ShowMoreText>
      </div>
      <div className='card-links'>
        <YouTube
          className='youtube-video'
          videoId={props.yUrl.slice(39, 50)}
          opts={{
            height: '300',
            width: '300',
            autoplay: 1
          }}
        />
        <p>{props.wUrl}</p>
      </div>
    </div> 
  </article>
  )
}

export default SelectedCard