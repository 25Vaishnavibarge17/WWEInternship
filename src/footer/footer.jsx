import React from "react";
import './footer.css';
import fb from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import insta from '../assets/instagram.png';
import ytb from '../assets/youtube.png';

const Footer=()=>{
    return (
        <div className="footer">
           <div className="sb__footer section_padding">
            <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                    <h4>About Us</h4>
                    <a href="/employer">
                       <p>Our Initiatives</p>
                    </a>
                    <a href="/healthplan">
                       <p>Annual Report</p>
                    </a>
                    <a href="/individual">
                       <p>Team</p>
                    </a>
                </div>

                <div className="sb__footer-links_div">
                <h4>Impact</h4>
                <a href="/resource">
                       <p>Our Impact</p>
                </a>
                <a href="/resource">
                       <p>Our Work</p>
                </a>
                </div>

            <div className="sb__footer-links_div">
            <h4>Contact Us</h4>
                <a href="/resource">
                       <p>Address</p>
                </a>
            </div>
            <div className="sb__footer-links_div">
                 <h4>Get Involved</h4>
                <a href="/about">
                       <p>Vounteer</p>
                </a>
                <a href="/Impact">
                       <p>Intern</p>
                </a>
                <a href="/getInvolved">
                       <p>Partner</p>
                </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Connect with us</h4>
                <div className="socialmedia">
                <a href="https://www.facebook.com/WWETDelhi/"><p><img src={fb} alt=""/></p></a>
                <a href="https://www.linkedin.com/in/waves-women-empowerment-a36423266/"><p><img src={linkedin} alt=""/></p></a>
                <a href="https://twitter.com/waveswomenempo1"><p><img src={twitter} alt=""/></p></a>
                <a href="https://www.instagram.com/waveswomenempower/"><p><img src={insta} alt=""/></p></a>
                <a href="https://www.youtube.com/channel/UCDvrS1e03AZ_K2kUkZfeZsg/featured"><p><img src={ytb} alt=""/></p></a>
                </div>
            </div>
            </div>
            <hr></hr>

            <div className="sb__footer-below">
                <div className="<sb__footer-copyright">
                    <p>
                       @{new Date().getFullYear()} Waves Women Empowerment. All rights reserved.
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms">
                        <div>
                            <p>Terms & Conditions</p>
                        </div>
                    </a>
                    <a href="/privacy">
                        <div>
                            <p>Privacy</p>
                        </div>
                    </a>
                    <a href="/security">
                        <div>
                            <p>Security</p>
                        </div>
                    </a>
                </div>
            </div>

           </div>
        </div>
    )
}

export default Footer;