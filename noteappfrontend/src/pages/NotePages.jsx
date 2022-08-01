import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import {ReactComponent as ArrowLeft} from "../assets/image/chevron-left.svg"

const NotePages = () => {  

  const navigate=useNavigate()
  const { id } = useParams();
  const [note, setNote] = useState({});

  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {
    if(id==='new') return
    let result = await fetch(`/api/notes/${id}/`);
    let data = await result.json();
    setNote(data);
  };

  let updateNote=async()=>{
    fetch(`/api/notes/${id}/`,{
        method:'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(note)

    })
  }


  let createNote=async()=>{
    fetch("/api/notes/",{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(note)

    })
  }


  let deleteNote=async()=>{
    fetch(`/api/notes/${id}/`,{
        method:'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    navigate("/")
  }



  const handleSubmit=()=>{
    if(id!=="new" && !note.body){
        deleteNote()
    }

    else if(id!=="new"){
    updateNote()}

    else if(id=="new" && note!==null){
      createNote()
    }
    navigate("/")
  }

  
  return (
    <div className="note">
        <div className="note-header">
           <h3><ArrowLeft onClick={handleSubmit}/></h3>
           {id!=='new'?( <button onClick={deleteNote}>Delete</button>):(<button onClick={handleSubmit}>Done</button>)}
          
        </div>
      <textarea onInput={e=>{setNote({...note,'body':e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  );
};

export default NotePages;
