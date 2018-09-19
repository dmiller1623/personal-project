import React from 'react';
import minusSvg from '../../images/minus-symbol.svg';
import './styles.css';
import ShowMoreText from 'react-show-more-text';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

const SelectedCard = (props) => {
  const { Name, wTeaser, yUrl, wUrl, deleteResources } = props;
  return (
    <article className='selected-card'>
      <div className='selected-card-title'>
        <img src={minusSvg} className='minus-button' alt='delete button' onClick={() => deleteResources(props)}/>
        <h1 className='searched-title'>{Name}</h1>
      </div>
      <div className='selected-card-info'>
        <div className='selected-card-description'> 
          <ShowMoreText>{wTeaser}</ShowMoreText>
        </div>
        <div className='selected-card-links'>
          {yUrl &&
            <YouTube
              className='youtube-video'
              videoId={yUrl.slice(39, 50)}
              opts={{
                height: '300',
                width: '300',
                autoplay: 1
              }}
            />}
          <a href={wUrl}>Wikipedia Link</a>
        </div>
      </div> 
    </article>
  );
};

SelectedCard.propTypes = {
  addResources: PropTypes.func,
  additionalResources: PropTypes.array,
  deleteResources: PropTypes.func,
  removeResource: PropTypes.func,
  Name: PropTypes.string,
  Type: PropTypes.string,
  wTeaser: PropTypes.string,
  yUrl: PropTypes.string,
  wUrl: PropTypes.string
};

export default SelectedCard;