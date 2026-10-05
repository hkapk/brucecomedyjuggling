import React from 'react';
import Photos from '../Photos';

const VIDEOS = [
    '12llRs-rCxw', // hero
    'LJJxDXP2VTs', 'yYwnB5cGvSw', // row of 2
    'jAR4WjWVyIs', '3Lgref_31hk', // row of 2
    'mcMaRLLwtSI', 'mDUfWppZRwg', 'j05erYTydww', // row of 3
];

function Video({ id, className = 'aspect-video' }) {
    return (
        <div className={`w-full overflow-hidden rounded-lg shadow-md bg-black ${className}`}>

            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    );
}

function Media() {
    const [hero, ...rest] = VIDEOS;
    const rowA = rest.slice(0, 2);
    const rowB = rest.slice(2, 4);
    const rowC = rest.slice(4, 7);

    return (
        <div className="min-h-screen w-full bg-slate-300 overflow-x-hidden py-12 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Hero — full width, 500px tall */}
                <Video id={hero} className="h-[500px]" />

                {/* Row of 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {rowA.map((id) => <Video key={id} id={id} />)}
                </div>

                {/* Row of 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {rowB.map((id) => <Video key={id} id={id} />)}
                </div>

                {/* Row of 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {rowC.map((id) => <Video key={id} id={id} />)}
                </div>

                <Photos />
            </div>
        </div>
    );
}

export default Media;