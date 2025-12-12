import React from 'react';
import { galleryImages } from '../../data/galleryImages';

function Media() {
    return (
        <div className="min-h-screen w-full bg-slate-300 md:w-screen max-w-none overflow-x-hidden py-12 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="col-span-1 md:col-span-3 p-4 flex justify-center">
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/l6-M0pzr_0E?si=JmJXSxiSiylD3spb"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="p-4 flex justify-center">
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/mcMaRLLwtSI?si=q5pemVVwEkTkld0t"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="p-4 flex justify-center">
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/mDUfWppZRwg?si=zcbXmorCP_pLYmPw"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="p-4 flex justify-center">
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/UcH3qrruPPw?si=960naiiMiFl5-8m_"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Gallery Grid */}
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

export default Media;
