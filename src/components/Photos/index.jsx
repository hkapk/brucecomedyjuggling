import React from 'react';
import { useState, useEffect } from "react";
import { galleryImages } from '../../data/galleryImages';

function Photos() {
    return (
        <div className="min-h-screen w-full bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">


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


export default Photos