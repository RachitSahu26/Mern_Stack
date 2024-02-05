import React, { useContext, useState } from 'react';
import Layout from '../../Components/LayOut/LayOut';
// import MyState from '../../Context/Data/MyState';
import myContext from '../../Context/Data/MyContext';

const AddNote = () => {
  const context = useContext(myContext);
  const { title, setTitle, description, setDescription, tag, setTag, addNote } = context;

  return (

    <Layout>

      <div className="   w-[90%] lg:w-1/2 sm:mt-20 mt-20 p-5 bg-black text-indigo-500  rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add Note</h2>
        <form >





          {/* Your input fields and labels go here */}
          {/* ....................title ........................... */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-white text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          {/* ....................tag ........................... */}




          <div className="mb-4">
            <label htmlFor="tag" className="block text-white text-sm font-bold mb-2">
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              value={tag}
              onChange={(e) =>setTag (e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>


          {/* ....................description........................... */}

          <div className="mb-4">
            <label htmlFor="description" className="block text-white text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              rows="4"
              required
            ></textarea>
          </div>


          {/* Similar input fields for 'tag' and 'description' */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={addNote}
          
          >
            Add Note
          </button>
        </form>
      </div>
    </Layout>

  );
};

export default AddNote;














