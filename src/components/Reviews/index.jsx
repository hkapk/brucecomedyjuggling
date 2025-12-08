import React from 'react';
import { testimonials } from "../../data/testimonials";

function Reviews() {
    return (
        <div className="min-h-screen w-full bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Reviews
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between"
                        >
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