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
        <div className="min-h-screen w-full overflow-x-hidden">

            {/* ----------------- UPCOMING + TV ----------------- */}
            <div
                className="w-full w-full md:w-screen max-w-none bg-black py-12 px-4 bg-[url('/images/BallMouthstick.jpeg')] bg-no-repeat bg-cover md:bg-contain md:bg-center"
            >
                <div className="max-w-6xl mx-auto text-center">
                    {/* Upcoming */}
                    <h1 className="text-neutral-200 pb-4 font-bold text-2xl">Upcoming</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map(event => (
                            <div
                                key={event.id}
                                className="bg-white/80 shadow-md rounded-xl p-6 flex flex-col justify-between"
                            >
                                <p className="text-lg font-semibold text-gray-900">{event.dates}</p>
                                <p className="mt-2 text-gray-700">{event.venue}</p>
                                <p className="mt-1 text-gray-700">{event.cityState}</p>
                            </div>
                        ))}
                    </div>

                    {/* TV & Film Appearances */}
                    <h1 className="text-neutral-200 pb-4 pt-8 font-bold text-2xl">TV & Film Appearances</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {appearances.map((appearance, index) => (
                            <div
                                key={index}
                                className="bg-white/70 shadow-md rounded-xl p-6 flex flex-col justify-between"
                            >
                                <p className="mt-2 text-gray-700">{appearance.festival}</p>
                                <p className="mt-1 text-gray-700">{appearance.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-black">
                <div className="w-full bg-slate-400 py-8 rounded-t-2xl px-2">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-neutral-900 font-bold text-2xl pb-4">Fairs, Festivals & Special Events</h1>
                        <p className="text-gray-900 text-sm  leading-relaxed">
                            {performances
                                .map(performance => `${performance.festival}, ${performance.location}`)
                                .join(" | ")}
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Events