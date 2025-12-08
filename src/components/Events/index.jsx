import React from 'react';
import { events } from "../../data/events";

function Events() {
    return (
        <div className="min-h-screen w-full bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Upcoming Events
                </h1>

                {/* Events Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between"
                        >
                            <p className="text-lg font-semibold text-gray-900">
                                {event.dates}
                            </p>

                            <p className="mt-2 text-gray-700">
                                <span className="font-medium">Venue:</span> {event.venue}
                            </p>

                            <p className="mt-1 text-gray-700">
                                <span className="font-medium">Location:</span> {event.cityState}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Events