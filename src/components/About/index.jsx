import React from 'react';
import TAFE from "../../assets/associations-img/TAFE.png";
import NAMEpros from "../../assets/associations-img/NAMEpros.jpg";
import ijalogo from "../../assets/associations-img/ijalogo.jpg";

function About() {
    return (
        <div className="bg-black min-h-screen">
            <div className="
            w-screen
            min-h-screen
            bg-[url('/images/BallMouthstick.jpeg')]
            bg-no-repeat 
            bg-cover
            bg-center
            md:bg-contain
            md:bg-right
            flex 
            justify-center md:justify-start
            items-start">
                <section id="about">
                    <div className="w-full flex flex-col items-center text-center px-12">
                        <div className="max-w-xl mb-6 pt-8 text-neutral-200">
                            <h2 className="text-2xl font-semibold pt-4">
                                Bruce Manners Comedy & Juggling and Stuff
                            </h2>
                            <p className="text-neutral-200 text-lg text-left pt-8">
                                With a career spanning over 35 years, Bruce Manners has established himself as a master of
                                comedy and precision in the world of juggling. Renowned for his unique blend of humor, skill,
                                and showmanship, he has entertained audiences across the country and shared the stage with
                                legendary acts including Penn & Teller, Leon Redbone, The Righteous Brothers, and The Beach
                                Boys.</p>
                            <p className="text-neutral-200 text-lg text-left pt-8">
                                What sets Bruce Manners apart is not just his exceptional talent, but his flair for the
                                unforgettable. He holds the distinct and quirky title of being the world’s first waterskiing
                                juggler—an innovative and daring feat that exemplifies his commitment to pushing the
                                boundaries of live performance.</p>
                            <p className="text-neutral-200 text-lg text-left pt-8">
                                Whether he's performing in theaters, festivals, or special events, Bruce Manners brings a timeless
                                charm and energy to every show. His long-standing dedication to his craft has made him a
                                favorite among audiences of all ages and a respected figure in the variety arts community.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 pt-8 gap-4 
                                md:flex md:justify-between">
                            <div className="w-32 h-28 flex items-center justify-center">
                                <a href="">
                                    <img src={TAFE} className="pb-4 max-w-full max-h-full object-contain rounded-lg" style={{ width: "" }} alt="Texas Fairs" />
                                </a>
                            </div>
                            <div className="w-32 h-28 flex items-center justify-center">
                                <a href="">
                                    <img src={ijalogo} className="pb-2 max-w-full max-h-full object-contain rounded-lg" style={{ width: "" }} alt="International Juggling Association" />
                                </a>
                            </div>
                            <div className="w-32 h-28 flex items-center justify-center">
                                <a href="">
                                    <img src={NAMEpros} className="max-w-full max-h-full object-contain rounded-lg" style={{ width: "" }} alt="NAME Pros" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div>
    );
}

export default About;