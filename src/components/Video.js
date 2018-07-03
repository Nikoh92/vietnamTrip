import React from 'react'
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    position: absolute;
`;

class Video extends React.Component{
      
    state = { 
        'playing':false
    }

   componentWillMount(){
        if(this.props.sliderActif){
            this.setState({
                'playing': true
            })
            
        }
    }

    render(){
        const styleP = {
            color: 'red',
            fontFamily: 'American Typewriter, serif',
            fontSize: '32px',
            textAlign:'center'
          };

        const styleReactPlayer = {
            alignContent: 'center',
            justifyContent: 'center'
        };

        const videoUrl = this.props.videoUrl;
        
        return(
            <Container>
                <p style={styleP}>ROAD TRIP VIETNAM 2017</p>
                <ReactPlayer 
                    width={'100%'}
                    style={styleReactPlayer}
                    playing={this.state.playing}
                    url={videoUrl}
                />
           </Container>
        )
    }
      
}

    Video.propTypes={
        videoUrl: PropTypes.string.isRequired
    };

export default Video;