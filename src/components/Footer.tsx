import * as React from "react";

export const Footer = () => {
    return (
        <footer>
            <div className="terms">
                <ul>
                    <li><a href="\">Home</a></li>
                    <li><a href="#">Term and Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Collection Statement</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Manage Account</a></li>
                </ul>
            </div>

            <div className="copy">&copy; All Rights Reserved</div>
            <div className="media">
                <div className="social">
                    <ul>
                        <li><a href="#"><img src={require("../assets/social/facebook-blue.svg")} width="100%"  /></a></li>
                        <li><a href="#"><img src={require("../assets/social/instagram-blue.svg")} width="100%" /></a></li>
                        <li><a href="#"><img src={require("../assets/social/twitter-blue.svg")} width="100%" /></a></li>
                    </ul>
                </div>
                <div className="store">
                    <ul>
                        <li><a href="#"><img src={require("../assets/store/app-store.svg")} width="100%" /></a></li>
                        <li><a href="#"><img src={require("../assets/store/play-store.svg")} width="100%" /></a></li>
                        <li><a href="#"><img src={require("../assets/store/windows-store.svg")} width="100%" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}