import React, { useState } from 'react'

function UpdateNote() {

const [title,setTitle]=useState('');
const [tag,setTag]=useState('');
const [description,setDescription]=useState('');



    //* Get Note By Id
    const getNotesById = async () => {
      const res = await fetch(`http://localhost:4000/api/notes/notes/${id}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
          }
      });
      const data = await res.json();

      //* Set data
      setTitle(data?.title)
      setTag(data?.tag)
      setDescription(data?.description)
  }


  return (
    <div>UpdateNote</div>
  )
}

export default UpdateNote