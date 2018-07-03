import React from 'react';
import PageSlider from '../modules/PageSlider';

import Header from '../components/header/Header';

class Slider extends React.Component {

  constructor() {
    super();
    this.state={ 'sliderActivated' : true};
    this._closeClick = this._closeClick.bind(this);
    this._handleClick = this._handleClick.bind(this);    
  }

  _closeClick(e) {
    e.preventDefault();
    this.setState({ 'sliderActivated' : false });    
  }

  _handleClick(e) {
    e.preventDefault();
    this.setState({ 'sliderActivated' : true });    
  }

  render() {
    const slide ='top';

    const customStyle = {
      backgroundColor: '#009cde'
    };

    return (      
      <div>   
        <Header click={this._handleClick}/>    
        <PageSlider customStyle={customStyle} show={this.state.sliderActivated} slideFrom={slide}>
		          <div class="centerer">
		        	<a class="button" onClick={this._closeClick}>See more</a>
	          	</div>         
        </PageSlider>
      </div>
    );
  }
};

export default Slider;
