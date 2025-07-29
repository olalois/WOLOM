import React from 'react';

const formatDate = (date) => {
  if (!date) return '';
  // If it's a Firestore Timestamp object
  if (typeof date === 'object' && date.seconds) {
    const jsDate = new Date(date.seconds * 1000);
    return jsDate.toLocaleDateString();
  }
  // If it's already a string
  return date;
};

const SermonCard = ({ sermon }) => (
  <div className="bg-zinc-200 rounded shadow p-4">
    {sermon.thumbnailUrl && (
      <img src={sermon.thumbnailUrl} alt={sermon.title} className="w-full h-48 object-cover rounded mb-2" />
    )}
    <h2 className="text-xl font-bold">{sermon.title}</h2>
    <p className="text-gray-600">{formatDate(sermon.date)}</p>
    <p className="mb-2">{sermon.description}</p>
    <a
      href={sermon.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
    >
      Watch
    </a>
  </div>
);

export default SermonCard;