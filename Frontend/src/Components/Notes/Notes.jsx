import React from 'react';

const Notes = () => {
  return (
    <div className="max-w-md mx-auto mt-5 bg-white shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="https://placekitten.com/200/300"
            alt="Note Image"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Note
          </div>
          <a
            href="/"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Title of the Note
          </a>
          <p className="mt-2 text-gray-500">
            A short description or content of the note goes here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
