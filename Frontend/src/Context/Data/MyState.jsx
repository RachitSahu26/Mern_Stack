

import React, { useState } from 'react'
import MyContext from './MyContext';




function MyState(props) {
  // Set up state or any other logic you need

  // Replace 'defaultValue' with the initial value for your context
  const [myStateValue, setMyStateValue] = useState("defaultValue");




  //* Loading state
  const [loading, setLoading] = useState(false);
  // ...................get all notes data............

  const [noteData, setNoteData] = useState([]);


  const getAllNotes = async () => {
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:3001/api/auth/getuser`, {

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



  return (
    <MyContext.Provider value={{ myStateValue, setMyStateValue, noteData, setNoteData, getAllNotes,loading, setLoading }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState







