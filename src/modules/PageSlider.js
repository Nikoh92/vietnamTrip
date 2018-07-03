import React from 'react';
import Video from '../components/Video';

import Fond from '../assets/backgroundImage.png';

class PageSlider extends React.Component {

  calculateSlidingStyle() {

    let oneHundred = 110;
    switch (this.props.slideFrom) {
      case 'top':
        oneHundred *= -1;
      default:
        return { hidden: { marginTop: oneHundred+'%', visibility:'hidden' }, shown: { marginTop: '0%', visibility:'' } };
    }
  }

  calculateOuterStyle() {

    const overlayStyle = {
      minWidth: '100%',
      minHeight: '100%',
      overflowY: 'auto', //to be checked
      overflowX: 'hidden', //to be checked
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      backgroundImage: `url(${Fond})`,
      boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.6)',
      WebkitTransition: 'all 1s linear',
      MozTransition: 'all 1s linear',
      OTransition: 'all 1s linear',
      transition: 'all 1s linear',
      top:0,
      willChange: 'transform',
      backgroundRepeat: 'repeat',
      overflow: 'hidden',
      zIndex:'2'
    };

    const defaultStyle = {
      backgroundImage :{ Fond },
      zIndex: '2'
    };

    const customStyle = {
      backgroundColor: '#FFF',
      backgroundImage: `url(${Fond})`,
      backgroundRepeat: 'repeat'
    };

    

    const { backgroundColor , zIndex } = Object.assign({}, defaultStyle, customStyle);
    const behaviour = this.calculateSlidingStyle();
    const shownStyle = Object.assign({}, overlayStyle, behaviour.shown, { backgroundColor, zIndex });
    const hiddenStyle = Object.assign({}, overlayStyle, behaviour.hidden, { backgroundColor, zIndex });

    return this.props.show ? shownStyle  : hiddenStyle;
  }

  calculateInnerStyle() {

    const centered = {
      position: 'absolute',
      bottom: '0%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    };

    return Object.assign({}, centered, this.props.innerStyle);
  }

  render() {
    //extract only styles that are needed
    const outerStyle = this.calculateOuterStyle();
    const innerStyle = this.calculateInnerStyle();
    //const closeDiv = this.renderCloseDiv();
    const booleanSlider = this.props.show;

    return (
     
      <div style={outerStyle}>
        <Video videoUrl="https://www.youtube.com/watch?v=OWxS6EOOVkg" sliderActif={booleanSlider}/>
        <div style={innerStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default PageSlider;
