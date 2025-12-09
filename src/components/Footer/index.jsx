import React from 'react';
import { SocialIcon } from 'react-social-icons';
import instagram from "../../assets/footer-img/instagram.png";
import facebook from "../../assets/footer-img/Facebook.png";
import youtube from "../../assets/footer-img/YouTube.png";
import BruceLogo from "../../assets/BruceMannersLogo.png"


function Footer() {
    return (

        <footer className="w-full py-6 bg-black">
            <div className="flex justify-evenly max-w-xs mx-auto w-full">
                <SocialIcon url="https://www.instagram.com/brucemanners" />
                <SocialIcon url="https://www.facebook.com/ComedyJuggler" />
                <SocialIcon url="https://www.youtube.com/user/IJuggle5" />
            </div>
            <div className="flex justify-evenly max-w-xs mx-auto w-full pt-4">
                <img src={BruceLogo} style={{ height: "100px" }} alt="Bruce" />
            </div>
            <p className="pt-4 text-white">Copyright © 2025</p>
        </footer>
    );
}

export default Footer;