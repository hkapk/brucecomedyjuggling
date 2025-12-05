import React from 'react';
import TAFE from "../../assets/associations-img/TAFE.png";
import ITFEA from "../../assets/associations-img/lTFEA.png";
import IFEA from "../../assets/associations-img/IFEA.jpg";
import NAMEpros from "../../assets/associations-img/NAMEpros.jpg";

function About() {
    return (
        <section id="about">



            <div className="w-full flex flex-col items-center text-center px-4">


                <div className="max-w-xl mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        Bruce Manners Comedy & Juggling and Stuff
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio error consectetur, amet debitis nesciunt repudiandae ullam harum deserunt modi. Unde, ullam. Esse officiis, labore iusto quibusdam fugiat praesentium animi.
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