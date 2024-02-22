import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center"style={{ backgroundImage: `url(/welcome.png)`, backgroundSize: 'cover' }}>
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Welcome to Red-Bus</h1>
        <p className="text-gray-700">Find and book your bus tickets with ease.</p>
        <Link to="/Homepage">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Go to Next Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
