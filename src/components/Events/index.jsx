import React from 'react';
import { appearances } from '../../data/appearances';
import { performances } from '../../data/performances';
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";

function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const q = query(
                    collection(db, "events"),
                    orderBy("date", "asc") // 👈 SORTS BY TIMESTAMP
                );

                const snapshot = await getDocs(q);

                const eventsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setEvents(eventsData);
            } catch (error) {
                console.error("Error fetching events:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);



    return (
        <div className="min-h-screen
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
                <h1 className="text-neutral-200 pb-4">Upcoming</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map(event => (
                        <div
                            key={event.id}
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

                <h1 className="text-neutral-200 pb-4 pt-4">TV & Film Appearances</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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


                <h1 className="text-neutral-200 pb-4 pt-4">Past Festivals</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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




            </div>
        </div>
    );
}

export default Events