import React from 'react';

const Events = () => {
    const events = [
        {
            title: "Community Service Day",
            date: "2023-10-15",
            time: "10:00 AM - 2:00 PM",
            description: "Join us for a day of service in our community. We will be helping local families in need."
        },
        {
            title: "Youth Group Meeting",
            date: "2023-10-22",
            time: "6:00 PM - 8:00 PM",
            description: "A fun evening for our youth to gather, learn, and grow together."
        },
        {
            title: "Thanksgiving Potluck",
            date: "2023-11-26",
            time: "5:00 PM - 8:00 PM",
            description: "Bring your favorite dish and join us for a night of gratitude and fellowship."
        }
    ];

    return (
        <div className="min-h-screen bg-zinc-600">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-10 mt-20 text-green-100">Upcoming Events🎉</h1>
                <ul className="space-y-6">
                    {events.map((event, index) => (
                        <li key={index} className=" p-4 rounded-lg shadow bg-gray-800 text-white">
                            <h2 className="text-xl font-semibold">{event.title}</h2>
                            <p className="text-gray-600">{event.date} | {event.time}</p>
                            <p className="mt-2">{event.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Events;