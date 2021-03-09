import React, {Component, useState} from "react";
import './Note.css'
import "./Button.css"
import NoteContent from "./NoteContent";
import {deleteNote, editNote} from "../redux/slices/notesSlice";
import {useDispatch} from "react-redux";


//TODO zrobic zeby bylo pure component i nie rerenderowalo przy kliknieciu na rozwiniecie
const Note = (props)=> {

    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(props.fav);
    const dispatch = useDispatch()

    const dropdown = () => {
        setOpen(!open)
    }

    const deletenote = () => {
        if(window.confirm("Czy usunąć notatkę ?"))
            dispatch(deleteNote(props.id))

    }

    const toggleCheckboxChange=()=>  {
        let data ={
            id:props.id,
            fav:!checked,
            tags:props.tags,
            title:props.title,
            content:props.content
        }
        dispatch(editNote(data));
        setChecked(!checked)
    }

        return (
            <div className="note">
                <div className="btn btn-block" >
                    <table>
                        <tbody>
                            <tr>
                                <th className='title' onClick={dropdown}>{props.title} </th>
                                <th>
                                    <label className={checked ? 'checked serce' : 'serce'}>
                                        <input className="toggle-heart" type="checkbox" checked={checked ? 'checked' : ""} onChange={toggleCheckboxChange}/>
                                        ❤
                                    </label>
                                </th>
                            </tr>
                            { open ? <NoteContent title={props.title} content={props.content} tags={props.tags} id={props.id} fav={props.fav}></NoteContent> : <tr></tr> }
                        </tbody>
                    </table>
                </div>
            </div>
        );
};

export default Note