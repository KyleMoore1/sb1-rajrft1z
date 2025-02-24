import React, { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">Counter App</h1>
        
        <div className="text-center">
          <div className="text-6xl font-bold mb-8 text-gray-800">{count}</div>
          
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setCount(prev => prev - 1)}
              className="flex items-center justify-center p-3 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors"
            >
              <Minus size={24} />
            </button>
            
            <button
              onClick={() => setCount(0)}
              className="flex items-center justify-center p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              <RotateCcw size={24} />
            </button>
            
            <button
              onClick={() => setCount(prev => prev + 1)}
              className="flex items-center justify-center p-3 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors"
            >
              <Plus size={24} />
            </button>
          </div>
          
          <p className="mt-6 text-gray-600">
            Click the buttons to modify the counter
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;