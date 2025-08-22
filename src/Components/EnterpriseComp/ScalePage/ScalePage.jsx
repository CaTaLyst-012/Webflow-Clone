import React, { useState} from 'react';
import './scalePage.css';
import firstIcon from '../../../assets/Images/circlestackIcon.png';
import secondIcon from '../../../assets/Images/efficiencyLogo1.png';
import thirdIcon from '../../../assets/Images/performanceIcon.png';
import fourthIcon from '../../../assets/Images/worldIcon2.png';


function ScalePage() {
  return (
    <div className='scalePageContainer'>
        <div className="scalePageUppersection">
            <h1 className='scalePageHeader'>Scale your sites with confidence</h1>
            <p className='scalePageParagraph'>Our platform gives you everything you need to build and maintain fast, reliable websites that grow to meet your needs.</p>
        </div>

        <div className="scalePageLowersection">
            <div className="scalebox">
                <div className="icon">
                    <img src={firstIcon} alt="Icon" className='firstIcon' />
                </div>
                <div className="boxArticle">
                    <h2>A visual-first, composable <br /> CMS</h2> <br />
                    <p>Choose how you want to <br />add, edit, and update <br />content at scale: visually <br /> in our platform or <br />programmatically <br /> through our headless <br /> APIs.</p>
                </div>

            </div>

            <div className="scalebox">
                <div className="icon">
                    <img src={secondIcon} alt="Icon" className='secondIcon' />
                </div>
                <div className="boxArticle">
                    <h2>Reliable traffic <br />management</h2> <br />
                    <p>Webflow’s enterprise- <br />grade stack and global <br />hosting network can <br /> handle large traffic <br /> surges with ease.</p>
                </div>

            </div>

            <div className="scalebox">
                <div className="icon">
                    <img src={thirdIcon} alt="Icon" className='thirdIcon' />
                </div>
                <div className="boxArticle">
                    <h2>World-class <br />performance</h2> <br />
                    <p>Fast page loads powered <br /> by Cloudflare and <br />enterprise-level uptime <br /> SLAs make for seamless <br />hosting.</p>
                </div>

            </div>

            <div className="scalebox">
                <div className="icon">
                    <img src={fourthIcon} alt="Icon" className='fourthIcon' />
                </div>
                <div className="boxArticle">
                    <h2>End-to-end <br />localization</h2> <br />
                    <p>Create fully localized site <br /> experiences for <br />audiences around the <br />world.</p>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default ScalePage
