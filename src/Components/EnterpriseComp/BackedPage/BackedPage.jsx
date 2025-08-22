import React, { useState} from 'react';
import './backedPage.css';
import webflowIcon1 from '../../../assets/Images/webflowCard.png';
import webflowIcon2 from '../../../assets/Images/webflowStar.png';
import webflowIcon3 from '../../../assets/Images/8pointedStar.png';
import webflowIcon4 from '../../../assets/Images/webflowProtectionIcon.png';

function BackedPage() {
  return (
     <div className='backedPageContainer'>
            <div className="backedPageUppersection">
                <h1 className='backedPageHeader'>Backed by enterprise-grade security</h1>
                <p className='backedPageParagraph'>Launch with peace of mind thanks to Webflow’s robust security features and reliable hosting infrastructure.</p>
            </div>
    
             <div className="backedPageLowersection">
                <div className="webflowbox">
                    <div className="webflowIcon">
                        <img src={webflowIcon1} alt="Icon" className='Icon1' />
                    </div>
                    <div className="webflowArticle">
                        <h2>Single sign-on & SCIM<br /> CMS</h2> <br />
                        <p>Securely integrate with <br /> your identity provider <br />and enable users to log in <br /> with SSO, plus automated <br />user provisioning via <br /> SCIM and JIT.</p>
                    </div>
    
                </div>
    
                <div className="webflowbox">
                    <div className="webflowIcon">
                        <img src={webflowIcon2} alt="Icon" className='Icon2' />
                    </div>
                    <div className="webflowArticle">
                        <h2>Security audit compliance</h2> <br />
                        <p>We provide a full <br />rundown of our risk and <br />cybersecurity <br />frameworks, as well as <br />industry-specific <br />controls.</p>
                    </div>
    
                </div>
    
                <div className="webflowbox">
                    <div className="icon">
                        <img src={webflowIcon3} alt="Icon" className='Icon3' />
                    </div>
                    <div className="webflowArticle">
                        <h2>SOC 2 Type II certified</h2> <br />
                        <p>Webflow adheres to SOC <br />2 Type II standards for <br /> security, availability, and <br />confidentiality.</p>
                    </div>
    
                </div>
    
                <div className="webflowbox">
                    <div className="icon">
                        <img src={webflowIcon4} alt="Icon" className='Icon4' />
                    </div>
                    <div className="webflowArticle">
                        <h2>Advanced DDoS protection</h2> <br />
                        <p>Our hosting network <br />offers built-in protection <br /> from domain denial of <br />service (DDoS) attacks <br />powered by AWS Shield.</p>
                    </div>
    
                </div>
            </div>
            <div className="thirdSection">
                <h2 className='webflowSecurityHeader'>Security at webflow</h2>
                <p className='webflowSecurityPara'>Learn more about Webflow's security practices and share details with your security team.</p>
            </div>
          
        </div>
  )
}

export default BackedPage
