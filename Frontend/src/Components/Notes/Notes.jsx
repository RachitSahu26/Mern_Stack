import React, { useContext, useEffect } from 'react';
import myContext from '../../Context/Data/MyContext';

const Notes = () => {
  const context = useContext(myContext)
  const { noteData, setNoteData, getAllNotes, loading, deleteNote } = context;
console.log(noteData.id)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getAllNotes();
    }
  }, []);

  return (
    <div className='mt-20 '>
      {noteData.length > 0 ? (
        noteData.map((item) => (

          <div key={item._id} className="max-w-[90%] mx-auto rounded-xl  border-teal-500 mt-5 text-white bg-black shadow-md overflow-hidden md:max-w-2xl border-2">
            <div className="md:flex ">
              <div className="md:flex-shrink-0  ">
                {/* <img
                  className="h-48 w-full object-cover md:w-48"
                  src={item.imageUrl}
                  alt="Note Image"
                /> */}
              </div>
              <div className="p-8 ">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Note
                </div>
                <a
                  href="/"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {item.title}
                </a>
                <p className="mt-2 text-white">{item.description}</p>

              </div>





            </div>




            {/* .................................................. delete and edit icons.................... */}
            <div className=" flex justify-end p-3 space-x-2">
              {/* Edit icon */}
              <div className="edit">
                <svg
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </div>


              {/* Delete Icon  */}
              <div className="del">
                <svg
                 onClick={()=>{deleteNote(item._id)}}
            
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
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
