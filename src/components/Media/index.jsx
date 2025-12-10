import React from 'react';
import { useState, useEffect } from "react";
import { galleryImages } from '../../data/galleryImages';

function Media() {
    return (
        <div className="min-h-screen w-full py-12 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-1 gap-6">
                    <div className="p-8 flex justify-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/l6-M0pzr_0E?si=JmJXSxiSiylD3spb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="p-8 flex justify-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/mcMaRLLwtSI?si=q5pemVVwEkTkld0t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="p-8 flex justify-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/mDUfWppZRwg?si=zcbXmorCP_pLYmPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="p-8 flex justify-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/UcH3qrruPPw?si=960naiiMiFl5-8m_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">

                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-xl shadow-md">
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
}


export default Media