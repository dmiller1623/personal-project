import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import addSvg from '../../images/plus.svg';
import ShowMoreText from 'react-show-more-text';
import YouTube from 'react-youtube';
import minusSvg from '../../images/minus-symbol.svg';
import { removeResource } from '../../actions';
import PropTypes from 'prop-types';

export class SearchedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  filterResources = (resource) => {
    const { removeResource, addResources } = this.props;
    const clicked = !this.state.clicked;
    this.setState({ clicked });
    const resourceNames = this.props.additionalResources.map(resource => resource.Name);
    if (resourceNames.includes(resource.Name)) {
      let additionalResources = this.props.additionalResources.filter(name => {
        return name.Name !== resource.Name;
      });
      removeResource(additionalResources);
    } 
    addResources(this.props);
  }

  render() {
    const { Type, Name, wTeaser, yUrl, wUrl } = this.props;
    return (
      <article className='searched-card'>
        <div className='card-title'>
          <div className='button-section'>
            <img src={this.state.clicked ? minusSvg : addSvg} className='add-button' alt='add button svg' onClick={() => this.filterResources(this.props)}/>
          </div>
          <div className='search-heading'>
            <h1>{Type}:</h1>
            <h1 className='searched-card-title'>{Name}</h1>
          </div>
        </div>
        <div className='card-info'>
          <div className='card-description'> 
            <ShowMoreText>{wTeaser}</ShowMoreText>
          </div>
          <div className='card-links'>
            {this.props.yUrl &&
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
  }
}

SearchedCard.propTypes = {
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

export const mapStateToProps = (state) => ({
  additionalResources: state.additionalResources
});

export const mapDispatchToProps = (dispatch) => ({
  removeResource: (resource) => dispatch(removeResource(resource))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchedCard);