import React, { Component } from 'react'
import './styles.css'
import addSvg from '../../images/plus.svg'
import ShowMoreText from 'react-show-more-text';
import YouTube from 'react-youtube';
import minusSvg from '../../images/minus-symbol.svg'


// const SearchedCard = (props) => {
//   return (
//     <article className='searched-card'>
//       <div className='card-title'>
//         <div className='button-section'>
//           <img src={addSvg} className='add-button' alt='add button svg' onClick={() => props.addResources(props)}/>
//         </div>
//         <div className='search-heading'>
//           <h2>{props.Type}:</h2>
//           <h2>{props.Name}</h2>
//         </div>
//       </div>
//       <div className='card-info'>
//         <div className='card-description'> 
//           <ShowMoreText>{props.wTeaser}</ShowMoreText>
//         </div>
//         <div className='card-links'>
//         {props.yUrl &&
//           <YouTube
//             className='youtube-video'
//             videoId={props.yUrl.slice(39, 50)}
//             opts={{
//               height: '300',
//               width: '300',
//               autoplay: 1
//             }}
//           />}
//           <a href={props.wUrl}>Wikipedia Link</a>
//         </div>
//       </div>
//     </article>
//   )
// }

// export default SearchedCard

class SearchedCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  switchClass = () => {
    const clicked = !this.state.clicked
    this.setState({ clicked })
    this.props.addResources(this.props)
  }

  render() {
    return (
      <article className='searched-card'>
        <div className='card-title'>
          <div className='button-section'>
            <img src={this.state.clicked ? minusSvg : addSvg} className='add-button' alt='add button svg' onClick={this.switchClass}/>
          </div>
          <div className='search-heading'>
            <h2>{this.props.Type}:</h2>
            <h2>{this.props.Name}</h2>
          </div>
        </div>
        <div className='card-info'>
          <div className='card-description'> 
            <ShowMoreText>{this.props.wTeaser}</ShowMoreText>
        </div>
        <div className='card-links'>
          {this.props.yUrl &&
          <YouTube
            className='youtube-video'
            videoId={this.props.yUrl.slice(39, 50)}
            opts={{
            height: '300',
            width: '300',
            autoplay: 1
            }}
          />}
          <a href={this.props.wUrl}>Wikipedia Link</a>
        </div>
      </div>
    </article>
    )
  }
}

export default SearchedCard