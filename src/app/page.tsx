'use client'

import React from 'react';
import Link from 'next/link';



const Home = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-500 to-slate-500">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Home</h1>
        <Link href="/sign-in">
          <button className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
            Create Task
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
