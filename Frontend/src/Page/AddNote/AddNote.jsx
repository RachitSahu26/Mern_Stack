import React, { useState } from 'react';
import Layout from '../../Components/LayOut/LayOut';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the submission of the note
    console.log('Submitted Note:', { title, description, tag });
    // Reset the form after submission
    setTitle('');
    setDescription('');
    setTag('');
  };

  return (

    <Layout>

      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add Note</h2>
        <form onSubmit={handleSubmit}>





          {/* Your input fields and labels go here */}
          {/* ....................title ........................... */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
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
            <label htmlFor="tag" className="block text-gray-700 text-sm font-bold mb-2">
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>


          {/* ....................description........................... */}

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
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
          >
            Add Note
          </button>
        </form>
      </div>
    </Layout>

  );
};

export default AddNote;


















