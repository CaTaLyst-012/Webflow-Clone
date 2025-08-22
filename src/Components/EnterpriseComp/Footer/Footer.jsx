import React, {useState} from 'react'
import './footer.css';
import webflowImg from '../../../assets/Images/webflow-logo.jpg';
import webflowImg2 from '../../../assets/Images/webflow-logo-black.jpg';
import facebookIcon from '../../../assets/Images/facebookIcon-black.png';
import instaIcon from '../../../assets/Images/InstagramIcon-Black.png';
import linkdenIcon from '../../../assets/Images/linkdenIcon-black.png';
import tiktokIcon from '../../../assets/Images/tiktokicon-black.png';
import xIcon from '../../../assets/Images/Xicon-black.png';
import youtubeIcon from '../../../assets/Images/YoutubeIcon-black.png';

function Footer() {
  return (
    <div className="footerContainer">
        <div className='footerUpperContainer'>
            <div className="foooterContent">
                <h4 className='footerHeader'>PRODUCT</h4>
                    <a href="">
                        <ul className='footerList'>
                            <li className='footerListItem'>Platform</li>
                            <li className='footerListItem'>Design</li>
                            <li className='footerListItem'>Edit mode</li>
                            <li className='footerListItem'>Interactions</li>
                            <li className='footerListItem'>Page building</li>

                        </ul>
                    </a>
                
            </div>

            <div className="foooterContent">
            <h4 className='footerHeader'>SOLUTIONS</h4>
                    <a href="">
                        <ul className='footerList'>
                            <li className='footerListItem'>Enterprise</li>
                            <li className='footerListItem'>Startups</li>
                            <li className='footerListItem'>Global alliances</li>
                            <li className='footerListItem'>Agencies</li>
                            <li className='footerListItem'>Freelancers</li>

                        </ul>
                    </a>
                
            </div>

            <div className="foooterContent">
            <h4 className='footerHeader'>RESOURCES</h4>
                    <a href="">
                        <ul className='footerList'>
                            <li className='footerListItem'>University</li>
                            <li className='footerListItem'>Blog</li>
                            <li className='footerListItem'>Customer stories</li>
                            <li className='footerListItem'>Webinars and ebooks</li>

                        </ul>
                    </a>
                
            </div>

            <div className="foooterContent">
            <h4 className='footerHeader'>COMPANY</h4>
                    <a href="">
                        <ul className='footerList'>
                            <li className='footerListItem'>About</li>
                            <li className='footerListItem'>Careers</li>
                            <li className='footerListItem'>Press</li>
                            <li className='footerListItem'>Webflow Ventures</li>
                            <li className='footerListItem'>Webflow Shop</li>

                        </ul>
                    </a>
                
            </div>

            <div className="foooterContent4">
            <h4 className='footerHeader'>COMMUNITY</h4>
                    <a href="">
                        <ul className='footerList'>
                            <li className='footerListItem'>Discover the community</li>
                            <li className='footerListItem'>Partner with webflow</li>
                            <li className='footerListItem'>Certified partners</li>
                            <li className='footerListItem'>Become a template designer</li>
                            <li className='footerListItem'>Become an affiliate</li>

                        </ul>
                    </a>
                
            </div>

            <div className="foooterContent">
            <h4 className='footerHeader'>GET HELP</h4>
                    <a href="">
                        <ul className='footerList'>
                            <li className='footerListItem'>Support</li>
                            <li className='footerListItem'>Pricing</li>
                            <li className='footerListItem'>Status</li>
                            <li className='footerListItem'>Forum</li>
                            <li className='footerListItem'>Wishlist</li>

                        </ul>
                    </a>
                
            </div>
        
        </div>

        <div className="footerDownContainer">
            <div className="footerDownSubContainer">
                <div className="downContent1">
                    <p className='footerPara'>© 2025 Webflow, Inc. All rights reserved</p>
                </div>

                <div className="doenContenet2">
                    <img src= {webflowImg} alt="webflowIcon" className='webflowFooterIcon'/>

                </div>

                <div className="downContent3">
                    <a href="#" className='footerLinkIcons'>
                        <ul className="webflowFooterIcons">
                            <li webflowFooterListItem>
                                <img src= {webflowImg2} alt="" className='webflowFooterIcon2'/>
                            </li>

                            <li webflowFooterListItem>
                                <img src= {youtubeIcon} alt="" className='youtubeFooterIcon'/>
                            </li>

                            <li webflowFooterListItem>
                                <img src= {xIcon} alt="" className='xFooterIcon'/>
                            </li>

                            <li webflowFooterListItem>
                                <img src= {facebookIcon} alt="" className='facebookFooterIcon'/>
                            </li>

                            <li webflowFooterListItem>
                                <img src= {linkdenIcon} alt="" className='linkdenflowFooterIcon'/>
                            </li>

                            <li webflowFooterListItem>
                                <img src= {instaIcon} alt="" className='instagramFooterIcon'/>
                            </li>

                            <li webflowFooterListItem>
                                <img src= {tiktokIcon} alt="" className='tiktokFooterIcon'/>
                            </li>
                        </ul>
                    </a>

                </div>
            </div>
        </div>
   </div>
  )
}

export default Footer
