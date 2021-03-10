import React, { useState} from "react";
import './Note.scss'
import "./Button.scss"
import NoteContent from "./NoteContent";
import { editNote} from "../redux/slices/notesSlice";
import {useDispatch, useSelector} from "react-redux";


const Note = (props)=> {

    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(props.fav);
    const dispatch = useDispatch()

    const dropdown = () => {
        setOpen(!open)
    }

    const options = useSelector((state) => state.options);
    const toggleCheckboxChange=()=>  {
        let data ={
            id:props.id,
            fav:!checked,
            tags:props.tags,
            title:props.title,
            content:props.content
        }
        dispatch(editNote({data,options}));
        setChecked(!checked)
    }

        return (
            <div className="note">
                <table className="note__table">
                    <tbody>
                    <tr>
                        <th className='note__title' onClick={dropdown}>{props.title} </th>
                        <th>
                            <label className={checked ? 'note__heart note__heart--checked' : 'note__heart'}>
                                <input className="note__checkbox" type="checkbox" onChange={toggleCheckboxChange}/>
                                ❤
                            </label>
                        </th>
                    </tr>
                    { open ? <NoteContent title={props.title} content={props.content} tags={props.tags} id={props.id} fav={props.fav}></NoteContent> : <tr></tr> }
                    </tbody>
                </table>
            </div>
        );
};

export default Note