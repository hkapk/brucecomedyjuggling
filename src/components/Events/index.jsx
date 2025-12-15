import React from 'react';
import { events } from "../../data/events";
import { appearances } from '../../data/appearances';
import { performances } from '../../data/performances';


function Events() {
    return (
        <div className="  min-h-screen
  w-full md:w-screen
  max-w-none
  overflow-x-hidden
  bg-black
  py-12 px-4
  bg-[url('/images/BallMouthstick.jpeg')]
  bg-no-repeat
  bg-cover
  md:bg-contain
  md:bg-center
  flex 
  justify-center md:justify-start
  items-start">
            <div className="max-w-6xl mx-auto text-center">
                <h1>Upcoming</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white/70 shadow-md rounded-xl p-6 flex flex-col justify-between"
                        >
                            <p className="text-lg font-semibold text-gray-900">
                                {event.dates}
                            </p>

                            <p className="mt-2 text-gray-700">
                                <span className="font-medium"></span> {event.venue}
                            </p>

                            <p className="mt-1 text-gray-700">
                                <span className="font-medium"></span> {event.cityState}
                            </p>
                        </div>
                    ))}
                </div>


                <h1>Past Festivals</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {performances.map((performance, index) => (
                        <div
                            key={index}
                            className="bg-white/70 shadow-md rounded-xl p-6 flex flex-col justify-between"
                        >

                            <p className="mt-2 text-gray-700">
                                <span className="font-medium"></span> {performance.festival}
                            </p>

                            <p className="mt-1 text-gray-700">
                                <span className="font-medium"></span> {performance.location}
                            </p>
                        </div>
                    ))}
                </div>

                <h1>TV & Film Appearances</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {appearances.map((appearance, index) => (
                        <div
                            key={index}
                            className="bg-white/70 shadow-md rounded-xl p-6 flex flex-col justify-between"
                        >

                            <p className="mt-2 text-gray-700">
                                <span className="font-medium"></span> {appearance.festival}
                            </p>

                            <p className="mt-1 text-gray-700">
                                <span className="font-medium"></span> {appearance.location}
                            </p>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default Events