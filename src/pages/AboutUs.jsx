import React from 'react';

const leaders = [
    {
        name: "Pastor Braimoh Solomon",
        title: "Senior Pastor",
        image: "EngBraimoh.png",
        description: "Founder and visionary leader, passionate about rural evangelism and discipleship."
    },
    {
        name: "Pastor Jane Smith",
        title: "Associate Pastor",
        image: "Assistantpastor.png",
        description: "Leads our youth and women’s ministries, dedicated to raising firebrand preachers."
    },
   {
        name: "Pastor Braimoh Solomon",
        title: "Senior Pastor",
        image: "EngBraimoh.png",
        description: "Founder and visionary leader, passionate about rural evangelism and discipleship."
    },
    {
        name: "Pastor Jane Smith",
        title: "Associate Pastor",
        image: "Assistantpastor.png",
        description: "Leads our youth and women’s ministries, dedicated to raising firebrand preachers."
    },
    {
        name: "Pastor Braimoh Solomon",
        title: "Senior Pastor",
        image: "EngBraimoh.png",
        description: "Founder and visionary leader, passionate about rural evangelism and discipleship."
    },
    // Add more leaders as needed
];

const AboutUs = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden pt-20">
            {/* Background Video and Overlay */}
            <div className="absolute inset-0 w-full h-full -z-10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="About background (online-video-cutter.com).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-sm"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4 text-zinc-300">About Us 👨‍👩‍👧‍👦</h1>
                <p className="mb-4 text-zinc-300">
                    World Liberation Outreach Ministry (WOLOM), also known as Living Word Global Freedom Ministry, is a vibrant community of believers dedicated to sharing the liberating power of God’s Word. Founded on the principles of faith, love, and service, our ministry exists to bring hope, healing, and transformation to individuals, families, and nations.
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-zinc-300">Vision🤝</h2>
                <p className="mb-4 text-zinc-300">
                    To liberate and empower lives through preaching Jesus.
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-zinc-300">Mission🤝</h2>
                <ul className="list-disc list-inside mb-4 text-zinc-300">
                    <li>To do gospel crusades especially in rural areas</li>
                    <li>To organize revival meetings in churches, schools, and higher institutions</li>
                    <li>To raise firebrand preachers via our fellowship and bible institute</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2 text-zinc-300">Our Values🤝</h2>
                <ul className="list-disc list-inside mb-4 text-zinc-300">
                    <li><strong>Faith:</strong> Trusting God in all things</li>
                    <li><strong>Love:</strong> Demonstrating Christ’s love to everyone</li>
                    <li><strong>Integrity:</strong> Living out the truth of God’s Word</li>
                    <li><strong>Service:</strong> Impacting our world through compassion and action</li>
                    <li><strong>Unity:</strong> Building a global family in Christ</li>
                </ul>
                {/* Meet Our Leaders (no video background) */}
                <div className="bg-transparent-300 bg-opacity-95 rounded-lg shadow-lg mt-10 p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-white">Meet Our Leaders 👨‍⚖️</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {leaders.map((leader, idx) => (
                            <div key={idx} className="bg-zinc-400 p-4 rounded">
                                <img
                                    src={`/${leader.image}`}
                                    alt={leader.name}
                                    className="w-64 h-64 object-cover rounded-lg mx-auto mb-2 shadow"
                                />
                                <h3 className="font-bold">{leader.name}</h3>
                                <p className="italic">{leader.title}</p>
                                <p>{leader.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;