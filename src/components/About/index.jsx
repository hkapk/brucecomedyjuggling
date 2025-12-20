import React from 'react';
import { useState, useEffect } from "react";
import TAFE from "../../assets/associations-img/TAFE.png";
import NAMEpros from "../../assets/associations-img/NAMEpros.jpg";
import ijalogo from "../../assets/associations-img/ijalogo.jpg";
import Lyman1 from "../../assets/boats/Lyman1.jpeg";
import Lyman2 from "../../assets/boats/Lyman2.jpeg";



function About() {

    const [lightbox, setLightbox] = useState(null);

    useEffect(() => {
        if (!lightbox) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setLightbox(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [lightbox]);



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


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center px-6 md:px-12 pt-12 bg-slate-400 rounded-t-xl">

                <p className="md:col-span-2 text-neutral-200 text-lg text-center pt-4">
                    Bruce and his wife Alice are avid boaters. They have two 1950's era Lyman outboard boats built in Sandusky, Ohio.
                </p>

                <div className="flex justify-center">
                    <img
                        src={Lyman1}
                        alt="1950s Lyman outboard boat"
                        className="object-contain rounded-xl pt-4 w-72 md:w-96 cursor-pointer hover:opacity-90 transition"
                        onClick={() =>
                            setLightbox({
                                src: Lyman1,
                                caption: "1950s Lyman outboard boat – Seabrook, TX",
                            })
                        }
                    />
                </div>

                <div className="flex justify-center">
                    <img
                        src={Lyman2}
                        alt="Classic Lyman boat on the water"
                        className="object-contain rounded-xl pt-4 w-72 md:w-96 cursor-pointer hover:opacity-90 transition pb-4"
                        onClick={() =>
                            setLightbox({
                                src: Lyman2,
                                caption: "Classic Lyman boat on the water",
                            })
                        }
                    />
                </div>


            </div>
            {lightbox && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                >
                    <div
                        className="max-w-full max-h-full text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={lightbox.src}
                            alt={lightbox.caption}
                            className="max-w-full max-h-[80vh] rounded-lg shadow-xl mx-auto"
                        />

                        {/* Caption */}
                        <p className="mt-4 text-neutral-200 text-sm md:text-base">
                            {lightbox.caption}
                        </p>
                    </div>

                    {/* Close button */}
                    <button
                        className="absolute top-6 right-6 text-white text-4xl hover:opacity-80"
                        onClick={() => setLightbox(null)}
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>
            )}

        </div>
    );
}

export default About;