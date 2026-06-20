import React from 'react';
import { testimonials } from "../../data/testimonials";

function Reviews() {
    return (
        <div className="    min-h-screen
  w-full md:w-screen
  max-w-none
  overflow-x-hidden
  bg-[url('/images/dangerBackground.avif')] 
  bg-center /* mobile position */
  bg-cover
  lg:bg-[center_top]
  md:bg-[center_top]
  py-12 px-4
">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white/70 shadow-md rounded-2xl p-6 flex flex-col justify-between"
                        >
                            <p className="text-gray-700 font-bold">
                                {t.title}
                            </p>
                            <p className="text-gray-700 italic">
                                "{t.message}"
                            </p>
                            <p className="mt-4 font-semibold text-gray-900">– {t.speaker}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reviews