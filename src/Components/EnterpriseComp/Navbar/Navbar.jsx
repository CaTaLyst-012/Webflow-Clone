import { Link } from 'react-router-dom'; 
import './navbar.css'; 
import logo from '../../../assets/images/webflow-logo.jpg'; 


const Navbar = () => { 
return ( 
    <nav className="navbar"> 
        <div className="navbar-left"> 
            <div className="webflow"> 
                 <img src={logo} alt="Webflow Logo" className="logo" />
                 <h3>Webflow </h3>
               
            </div> 

            <div className="nav-links"> 
                    <ul>
                        <li>
                            <Link to="/platform" className="nav-item">Platform</Link> 
                        </li>
                        {/* <li>
                           <link to= "/#">
                           <ul>
                            <li>Item 1</li>
                           </ul>
                           </link>
                        </li> */}

                        <li>
                            <Link to="/solutions" className="nav-item">Solutions</Link> 
                        </li>
                        <li>
                            <Link to="/resources" className="nav-item">Resources</Link> 
                        </li>
                        <li>
                            <Link to="/" className="nav-item">Enterprise</Link> 
                        </li>
                        <li>
                            <Link to="/pricing" className="nav-item">Pricing</Link> 
                        </li>    
                        
                    </ul>
            </div> 

        </div> 
        <div className="navbar-right"> 
            <ul className='nav-links-left'>
                <li>
                    <Link to="/login" className="nav-item">Login</Link> 
                </li>
                <li>
                    <Link to="/contact" className="nav-item">Contact sales</Link> 
                </li> 
            
            </ul>

            <button className="cta-button">Get started — it's free</button>
            
        </div> 
    </nav> 
);}; 
export default Navbar;