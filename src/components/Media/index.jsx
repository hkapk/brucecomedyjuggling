import React from 'react';
import Photos from '../Photos';

function Media() {
    return (
        <div className="min-h-screen w-full bg-slate-300 md:w-screen max-w-none overflow-x-hidden py-12 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="col-span-1 md:col-span-3 p-4 flex justify-center">
                        <iframe width="100%" height="500"
                            src="https://www.youtube.com/embed/yYwnB5cGvSw?si=8dOzRUBGEJ50sBGF"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
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
                <Photos />
            </div>
        </div>
    );
}

export default Media;
