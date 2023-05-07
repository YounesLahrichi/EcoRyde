import React from "react";
import { BiMailSend, BiPhone } from "react-icons/bi";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="contact-info">
                    <p>
                        <a href="mailto:email@ecoryde.uw.edu">
                            <span><BiMailSend/></span> email@ecoryde.uw.edu
                        </a>
                    </p>
                    <p>
                        <a href="tel:123-456-7890">
                            <span><BiPhone/></span> 123-456-7890
                        </a>
                    </p>
                </div>
            </div>
            <p className="move-right">&copy; EcoRyde 2023</p>
        </footer>
    );
}

export default Footer;
