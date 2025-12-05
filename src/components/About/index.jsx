import React from 'react';
import TAFE from "../../assets/associations-img/TAFE.png";
import ITFEA from "../../assets/associations-img/lTFEA.png";
import IFEA from "../../assets/associations-img/IFEA.jpg";
import NAMEpros from "../../assets/associations-img/NAMEpros.jpg";

function About() {
    return (
        <section id="about">



            <div className="w-full flex flex-col items-center text-center px-4">


                <div className="max-w-xl mb-6 pt-2">
                    <h2 className="text-2xl font-semibold mb-2">
                        Bruce Manners Comedy & Juggling and Stuff
                    </h2>
                    <p className="text-gray-700 text-lg">
                        An entertaining blend of stand-up comedy, audience participation and outrageous stunts.   Based in Houston, Texas, Bruce Manners is available to make your next event a success.

                        Bruce Manners has created a unique entertainment experience. As a featured stage act, Bruce combines stand-up comedy and juggling or “stand up juggling” to create an act suitable for corporate, family, and public markets. As a strolling or “atmosphere” entertainer, Bruce presents world class 3 ball juggling and amazing balance tricks while engaging the crowd in a relaxed and unobtrusive manner. No matter the venue, Bruce Manners is always a crowd favorite.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 
                                md:flex md:justify-between">
                    <div className="w-32 h-28 flex items-center justify-center bg-white">
                        <a href="">
                            <img src={TAFE} className="max-w-full max-h-full object-contain" style={{ width: "" }} alt="Texas Fairs" />
                        </a>
                    </div>
                    <div className="w-32 h-28 flex items-center justify-center bg-white">
                        <a href="">
                            <img src={IFEA} className="max-w-full max-h-full object-contain" style={{ width: "" }} alt="International Festivals & Events" />
                        </a>
                    </div>
                    <div className="w-32 h-28 flex items-center justify-center bg-white">
                        <a href="">
                            <img src={ITFEA} className="max-w-full max-h-full object-contain" style={{ width: "" }} alt="Texas Festivals and Events" />
                        </a>
                    </div>
                    <div className="w-32 h-28 flex items-center justify-center bg-white">
                        <a href="">
                            <img src={NAMEpros} className="max-w-full max-h-full object-contain" style={{ width: "" }} alt="NAME Pros" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;