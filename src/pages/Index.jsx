import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
  const response = await fetch('/data.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Index = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ['mediaData'], queryFn: fetchData });

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Media Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.media_id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={`/images/${item.media_id}.jpg`}
              alt={item.description}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `/images/${item.media_id}.jpeg`;
              }}
            />
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-xs text-gray-500">Rank Score: {item.content['rank-score']}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
