import React, { Component } from 'react';
import { goToAnchor } from 'react-scrollable-anchor'
import DrapeauVietnam from '../../assets/drapeau.jpg';

class Header extends Component{

    render(){

        return(
            <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container custom-footer">
              <div className="row">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                  </button>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                  <li className="menu-item">
                      <a title="Hội An" onClick={() => goToAnchor('Hội An')}>Hội An</a>
                    </li>
                    <li className="menu-item">
                      <a title="Ha Long Bay" onClick={() => goToAnchor('Ha Long Bay')}>Ha Long Bay</a>
                    </li>
                    <li className="menu-item">
                      <a title="Huế" onClick={() => goToAnchor("Huế")}>Huế</a>
                    </li>
                    <li className="menu-item">
                     <a title="Hanoi" onClick={() => goToAnchor("Hanoi")}>Hanoi</a>
                    </li>
                    <li className="menu-item">
                      <a title="Ho Chi Minh" onClick={() => goToAnchor("Ho Chi Minh")}>Ho Chi Minh</a>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <a>
                <img onClick={this.props.click} alt="vietnamFlag" src={DrapeauVietnam} className="vietnamFlag img-circle"/>
                </a>
            </div>
          </nav>
        );
    }
    
}

export default Header;