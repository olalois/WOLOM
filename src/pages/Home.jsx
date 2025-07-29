import React from 'react';

const Home = () => {
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center flex flex-col"
            style={{ backgroundImage: "url('/backgroundimage.jpg')" }}
        >
            {/* Overlay for better text visibility */}
            <div className="flex-1 w-full bg-black bg-opacity-60 flex flex-col items-center">
                {/* Hero Section */}
                <section className="w-full">
                    <div className="container mx-auto text-center text-zinc-300 rounded-lg p-8 max-w-2xl pt-8 mt-40 bg-black bg-opacity-40 rounded max-w-xl w-full">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-300">
                            Welcome to World Liberation Outreach Ministry (WOLOM)🙌🏽
                        </h1>
                        <p className="text-xl mb-4">
                            aka Living Word Global Freedom Ministry
                        </p>
                        <p className="text-lg mb-6">
                            Experience the transforming power of God’s Word and the freedom found in Christ. Join our global family as we worship, grow, and serve together.
                        </p>
                        <blockquote className="italic text-lg mb-6">
                            “Where the Spirit of the Lord is, there is liberty.” – 2 Corinthians 3:17
                        </blockquote>
                        <a
                            href="https://youtube.com/" // Replace with your live stream link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white py-2 px-6 rounded shadow hover:bg-blue-700 transition"
                        >
                            Join Us Live⛪✨
                        </a>
                    </div>
                </section>
                {/* Service Times and Location */}
                <main className="flex flex-col items-center mt-10 w-full text-zinc-200">
                    <section className="text-center mb-10 bg-black bg-opacity-40 rounded p-6 max-w-xl w-full">
                        <h2 className="text-3xl font-semibold">Join Us for Worship✝️🕊️</h2>
                        <p className="mt-4 text-lg">Service Times: Sundays at 10 AM</p>
                        <p className="mt-2 text-lg">Location: The mission house, near the ECWA church, Ipetu, Kwara State, Nigeria.</p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Home;