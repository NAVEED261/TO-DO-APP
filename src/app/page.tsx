"use client";
import React, { useState } from "react";

const TODOAPP = () => {
  // Define state
  const [todo, settodo] = useState([
    { movie: "Three Idiots", id: 1 },
    { movie: "Titanic", id: 2 },
  ]);
  const [inputvel, setinput] = useState("");
  const [id, setid] = useState(0);

  // Function to add or update an item
  const addItem = () => {
    let obj = todo.find((item) => item.id === id);
    if (obj) {
      let newArray = todo.filter((item) => item.id !== obj.id);
      settodo([...newArray, { movie: inputvel, id: id }]);
      setinput("");
      setid(0);
      return;
    }
    settodo([...todo, { movie: inputvel, id: id }]);
    setinput("");
    setid(0);
  };

  // Function to edit an item
  const edititem = (id) => {
    let obj = todo.find((item) => item.id === id);
    setinput(obj.movie);
    setid(obj.id);
  };

  // Function to delete an item
  const delitem = (id) => {
    let newArray = todo.filter((item) => item.id !== id);
    settodo([...newArray]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-5 border-gray-300 focus:border-blue-400">
      <div className="max-w-4xl mx-auto p-10 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
        <h1 className="text-center text-5xl font-bold underline text-gray-800 hover:bg-gray-200 transition-colors duration-300">
          TODO APP
        </h1>
        {/* Input and button div */}
        <div className="flex justify-between gap-4 mt-5">
          <input
            type="text"
            value={inputvel}
            onChange={(e) => setinput(e.target.value)}
            className="w-3/5 p-4 text-lg border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 hover:bg-gray-200 transition-colors duration-300"
            placeholder="Write movie name"
          />
          <input
            type="number"
            value={id}
            onChange={(e) => setid(parseInt(e.target.value))}
            className="w-1/5 p-4 text-lg border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 hover:bg-gray-200 transition-colors duration-300"
            placeholder="Write ID"
          />
          <button
            onClick={addItem}
            className="w-1/5 bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors duration-300"
          >
            Add Movie
          </button>
        </div>

        <h2 className="text-center text-3xl font-semibold underline text-gray-800 mt-10 hover:bg-gray-200 transition-colors duration-300">
          Daily Task (Listen Naat)
        </h2>
        <div className="grid grid-cols-2 gap-5 mt-5">
          {todo.map((item, i) => (
            <div
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300"
              key={item.id}
            >
              <div className="flex justify-between items-center text-lg">
                <span className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-400 transition-colors duration-300">
                  {i + 1}
                </span>
                <span
                  onClick={() => delitem(item.id)}
                  className="bg-red-500 hover:bg-red-700 transition-colors duration-300 rounded-full h-8 w-8 flex items-center justify-center text-white cursor-pointer"
                >
                  x
                </span>
              </div>
              <div className="mt-5 text-2xl font-semibold text-gray-700 hover:bg-gray-300 transition-colors duration-300">
                {item.movie}
              </div>
              <div>
                <h3
                  onClick={() => edititem(item.id)}
                  className="text-right cursor-pointer text-blue-500 mt-2 hover:underline hover:bg-gray-200 transition-colors duration-300"
                >
                  Edit
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TODOAPP;
