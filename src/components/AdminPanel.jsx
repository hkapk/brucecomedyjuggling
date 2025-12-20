import { useEffect, useState } from "react";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";

function AdminPanel() {
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({
        date: "",
        dates: "",
        venue: "",
        cityState: "",
    });

    const eventsRef = collection(db, "events");


    useEffect(() => {
        const fetchEvents = async () => {
            const snapshot = await getDocs(eventsRef);
            const fetchedEvents = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setEvents(sortEventsByDate(fetchedEvents));
        };

        fetchEvents();
    }, []);


    const sortEventsByDate = (eventsArray) => {
        return [...eventsArray].sort(
            (a, b) => a.date?.seconds - b.date?.seconds
        );
    };


    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleAddEvent = async (e) => {
        e.preventDefault();

        if (
            !formData.date ||
            !formData.dates ||
            !formData.venue ||
            !formData.cityState
        )
            return;

        const newEvent = {
            dates: formData.dates,
            venue: formData.venue,
            cityState: formData.cityState,
            date: Timestamp.fromDate(new Date(formData.date)),
        };

        const docRef = await addDoc(eventsRef, newEvent);

        alert("Event successfully added!");

        setEvents((prev) =>
            sortEventsByDate([
                ...prev,
                { id: docRef.id, ...newEvent },
            ])
        );

        setFormData({
            date: "",
            dates: "",
            venue: "",
            cityState: "",
        });
    };


    /* ---------------- DELETE EVENT ---------------- */
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "events", id));
        setEvents(prev => prev.filter(event => event.id !== id));
    };

    /* ---------------- UI ---------------- */
    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-semibold mb-6">
                Manage Events
            </h2>

            {/* ADD EVENT FORM */}
            <form
                onSubmit={handleAddEvent}
                className="mb-10 space-y-4 bg-gray-100 p-6 rounded-lg"
            >
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="dates"
                    placeholder="Date(s) (e.g. Jan 8–10, 2026)"
                    value={formData.dates}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />

                <input
                    type="text"
                    name="venue"
                    placeholder="Venue"
                    value={formData.venue}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />

                <input
                    type="text"
                    name="cityState"
                    placeholder="City, State"
                    value={formData.cityState}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />

                <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                    Add Event
                </button>
            </form>

            {/* EVENTS LIST */}
            <ul className="space-y-4">
                {events.map(event => (
                    <li
                        key={event.id}
                        className="flex justify-between items-center border p-4 rounded"
                    >
                        <div>
                            <p className="font-medium">{event.dates}</p>
                            <p>{event.venue}</p>
                            <p className="text-sm text-gray-600">
                                {event.cityState}
                            </p>
                        </div>

                        <button
                            onClick={() => handleDelete(event.id)}
                            className="text-red-600 hover:underline"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminPanel;
