import React, { useEffect, useState } from 'react';
import SermonCard from '../components/SermonCard';
import { db } from '../firebase/config';
import { collection, getDocs } from "firebase/firestore";

const Sermons = () => {
    const [sermons, setSermons] = useState([]);

    useEffect(() => {
        const fetchSermons = async () => {
            const snapshot = await getDocs(collection(db, 'sermons'));
            const sermonsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setSermons(sermonsData);
        };

        fetchSermons();
    }, []);

    return (
        <div className="min-h-screen bg-gray-800 flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold mb-6 text-white mt-20">Recent Sermons 📖🙏</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mt-10">
                {sermons.map(sermon => (
                    <SermonCard key={sermon.id} sermon={sermon} />
                ))}
            </div>
        </div>
    );
};

export default Sermons;