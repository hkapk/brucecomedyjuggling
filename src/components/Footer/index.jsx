import React from 'react';
import instagram from "../../assets/footer-img/instagram.png";
import facebook from "../../assets/footer-img/Facebook.png";
import youtube from "../../assets/footer-img/YouTube.png";
import BruceLogo from "../../assets/BMlogo.png"


function Footer() {
    return (

        <footer className="w-full py-6">
            <div className="flex justify-evenly max-w-xs mx-auto w-full">
                <a href="https://www.instagram.com/brucemanners/">
                    <img src={instagram} class="px-2" style={{ width: "60px" }} alt="github" />
                </a>
                <a href="https://www.facebook.com/ComedyJuggler">
                    <img src={facebook} class="px-2" style={{ width: "60px" }} alt="instagram" />
                </a>
                <a href="https://www.youtube.com/user/IJuggle5">
                    <img src={youtube} class="px-2" style={{ width: "65px", marginBottom: "5px" }} alt="gmail" />
                </a>
            </div>
            <div className="flex justify-evenly max-w-xs mx-auto w-full pt-4">
                <img src={BruceLogo} style={{ height: "100px" }} alt="Bruce" />
            </div>
            <p className="pt-4">Copyright © 2025</p>
        </footer>
    );
}

export default Footer;