import React from 'react'
import minusSvg from '../../images/minus-symbol.svg'
import './styles.css'
import ShowMoreText from 'react-show-more-text';
import YouTube from 'react-youtube';


const SelectedCard = (props) => {
  return (
    <article className='selected-card'>
      <div className='selected-card-title'>
        {/* <div className='selected-button-section'> */}
          <img src={minusSvg} className='minus-button' alt='delete button' onClick={() => props.deleteResources(props)}/>
        {/* </div> */}
        {/* <div className='selected-search-heading'> */}
          <h1 className='searched-title'>{props.Name}</h1>
        {/* </div> */}
      </div>
      <div className='selected-card-info'>
        <div className='selected-card-description'> 
          <ShowMoreText>{props.wTeaser}</ShowMoreText>
        </div>
        <div className='selected-card-links'>
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
            <a href={props.wUrl}>Wikipedia Link</a>
        </div>
      </div> 
    </article>
  )
}

export default SelectedCard