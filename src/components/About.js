import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import profile from '../assets/hello.jpg'

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
            </Fade>
            </div>

            <img src={profile} alt='about iamge' style={{width:300, height:300}}></img>
            

        </div>  );
    }
}
 
export default About;