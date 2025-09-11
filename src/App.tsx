import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-highlight mb-6 tracking-wide">
            Pulpo Con Inventory
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-turquoise to-blue-violet mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
            Inventory Management System
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
