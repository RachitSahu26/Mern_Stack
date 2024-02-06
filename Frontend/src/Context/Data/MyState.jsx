

import React, { useState } from 'react'
import MyContext from './MyContext';

import toast from 'react-hot-toast';




function MyState(props) {
  // Set up state or any other logic you need

  // Replace 'defaultValue' with the initial value for your context
  const [myStateValue, setMyStateValue] = useState("defaultValue");


  // ...................add notes for states..........

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tag, setTag] = useState('')



  //* Loading state
  const [loading, setLoading] = useState(false);
  // ...................get all notes data............

  const [noteData, setNoteData] = useState([]);


  const getAllNotes = async () => {
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:3001/api/notes/fetchallnotes`, {

        method: "get",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }

      });



      const data = await res.json()
      console.log(data);
      setNoteData(data);
      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false)
    }





  }




  //* Add note Function
  const addNote = async () => {




    const res = await fetch(`http://localhost:3001/api/notes/addnote`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },

      body: JSON.stringify({ title, description, tag })


    });




    //* response
    const noteData = await res.json();
    // console.log(noteData)
    getAllNotes();

    //* condition 
    if (noteData.error) {
      toast.error(noteData.error)
      console.log(noteData.error)
    } else {
      toast.success(noteData.success);
      console.log(noteData.success)
    }

    //* after submit data all fields empty
    setTitle("");
    setDescription("");
    setTag("");
  }





  // ...................................delete Notes............
  const deleteNote = async (id) => {

    const res = await fetch(`http://localhost:3001/api/notes/deletenote/${id}`, {

      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    }
    )
    //* response
    const noteData = await res.json();
    getAllNotes();
    // console.log(noteData)
    toast.success(noteData.success)
  }


  return (
    <MyContext.Provider value={{
      deleteNote,
      title, setTitle,
      description, setDescription,
      tag, setTag,
      addNote,
      myStateValue, setMyStateValue,
      noteData, setNoteData,
      getAllNotes,
      loading, setLoading
    }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;







