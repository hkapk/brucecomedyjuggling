import React from 'react';
import { SocialIcon } from 'react-social-icons';
import BruceLogo from "../../assets/BruceMannersLogo.png"


function Footer() {
    return (

        <footer className="w-full py-6 bg-gradient-to-b bg-neutral-100 to-neutral-700">
            <div className="flex justify-evenly max-w-xs mx-auto w-full pt-2 pb-2">
                <div className="hover:scale-110 transition-transform duration-200">
                    <SocialIcon url="https://www.instagram.com/brucemanners"
                        style={{ height: 64, width: 64 }}
                        fgColor="#475569"
                        bgColor="transparent" /></div>
                <div className="hover:scale-110 transition-transform duration-200">
                    <SocialIcon url="https://www.facebook.com/ComedyJuggler"
                        style={{ height: 64, width: 64 }}
                        fgColor="#475569"
                        bgColor="transparent" /></div>
                <div className="hover:scale-110 transition-transform duration-200">
                    <SocialIcon url="https://www.youtube.com/user/IJuggle5"
                        style={{ height: 64, width: 64 }}
                        fgColor="#475569"
                        bgColor="transparent" /></div>
            </div>
            <div className="flex justify-evenly max-w-xs mx-auto w-full pt-4">
                <a href="/">
                    <img src={BruceLogo} style={{ height: "100px" }} alt="Bruce" />
                </a>
            </div>
            <p className="pt-4 text-center text-white">Copyright © 2025</p>
            <p className="pt-4 text-center font-semibold text-white text-xs"><a href="https://hankkapka.com" target="_blank" rel="noopener noreferrer">Hank Kapka | Web Dev</a></p>
        </footer>
    );
}

export default Footer;