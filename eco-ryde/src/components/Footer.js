import React from "react";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="contact-info">
                    <p className="emailInfo">
                        <a href="mailto:email@ecoryde.uw.edu">
                            <span className="material-icons">email(!) </span> email@ecoryde.uw.edu
                        </a>
                    </p>
                    <p>
                        <a href="tel:123-456-7890">
                            <span className="material-icons">phone(!) </span> 123-456-7890
                        </a>
                    </p>
                </div>
            </div>
            <p className="move-right">&copy; EcoRyde 2023</p>
        </footer>
    );
}

export default Footer;
