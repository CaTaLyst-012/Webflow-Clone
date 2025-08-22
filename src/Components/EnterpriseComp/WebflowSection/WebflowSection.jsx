import React, { useState} from 'react';
import './webflowSection.css';
import webflowRightImg from '../../../assets/Images/webflowRightImg.png';

function WebflowSection() {
  return (
    <div className='webflowSectionContainer'>
        <div className="webflowSectionSubContainer">
            <div className="webflowSectionLeft">
                <button className='webflowPlatformButton'>WEBFLOW PLATFORM</button>
                <h2 className='webflowPlatformHeader'>A powerful platform for marketing, design and dev</h2>
                <p className='webflowPlatformPara'> Webflow is more than just a website builder. It gives <br />every team the tools they need — including visual <br />site building, content management, analytics and <br /> optimization.</p>
                <h4 className='webflowPlatformHeader4'>Explore the Webflow platform →</h4>
                
            </div>

            <div className="webfloSectionRight">
                <img src={webflowRightImg } alt="Image" className='webflowRightImg' />

            </div>
        </div>
      
    </div>
  )
}

export default WebflowSection
