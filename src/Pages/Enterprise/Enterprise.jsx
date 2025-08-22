import React from 'react'; 
import Navbar from '../../Components/EnterpriseComp/Navbar/Navbar'; 
import HeroSection from '../../Components/EnterpriseComp/HeroSection/HeroSection'
import Tranform from '../../Components/EnterpriseComp/Transform/Transform'
import ScalePage from '../../Components/EnterpriseComp/ScalePage/ScalePage'
import WebflowSection from '../../Components/EnterpriseComp/WebflowSection/WebflowSection';
import BackedPage from '../../Components/EnterpriseComp/BackedPage/BackedPage';
import Footer from '../../Components/EnterpriseComp/Footer/Footer';
import './Enterprise.css';

function Enterprise() { 
return ( 
    <div className='enterprise'> 
        <div className="navControl"> 
            <Navbar/> 
        </div> 

        <div className="heroGuard"> 
            <HeroSection/> 
        </div> 

        <div className="transformGuard">
            <Tranform/>
        </div>
        <div className="scalePageGuard">
            <ScalePage/>
        </div>

        <div className="webflowSectionGuard">
            <WebflowSection/>
        </div>
        <div className="backedPageGuard">
            <BackedPage/>
        </div>
        <div className="footerGuard">
            <Footer/>
        </div>
        {/* Continue below with other sections */} 
    </div> 
);}; 
export default Enterprise;
