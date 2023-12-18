import React, { useContext, useEffect } from 'react';
import myContext from '../../Context/Data/MyContext';

const Notes = () => {
  const context = useContext(myContext)
  const { noteData, setNoteData, getAllNotes, loading } = context;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getAllNotes();
    }
  }, []);

  return (
    <div>
      {noteData.length > 0 ? (
        noteData.map((item, index) => (
          <div key={index} className="max-w-md mx-auto mt-5 bg-white shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                {/* <img
                  className="h-48 w-full object-cover md:w-48"
                  src={item.imageUrl}
                  alt="Note Image"
                /> */}
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Note
                </div>
                <a
                  href="/"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {item.title}
                </a>
                <p className="mt-2 text-gray-500">{item.description}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
      


};

export default Notes;
