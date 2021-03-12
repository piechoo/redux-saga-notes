import React, {memo, useState} from "react";
import './Note.scss'
import "./Button.scss"
import NoteContent from "./NoteContent";
import {editNote} from "../redux/slices/notesSlice";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";



const Note = (props)=> {

    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(props.fav);
    const dispatch = useDispatch()

    const dropdown = () => {
        setOpen(!open)
    }

    const options = useSelector((state) => state.options);
    const handleCheckboxChange=()=>  {
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
                                <input className="note__checkbox" type="checkbox" onChange={handleCheckboxChange}/>
                                ❤
                            </label>
                        </th>
                    </tr>
                    { open ? <NoteContent {...props}></NoteContent> : <tr></tr> }
                    </tbody>
                </table>
            </div>
        );
};

Note.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.string,
    fav: PropTypes.bool
}
Note.defaultProps = {
    title: 'tytul domyślnej notatki',
    content: 'zawartosc domyślnej notatki',
    tags: 'tagi,domyślnej, notatki',
    id: '123',
    fav: false
};

export default memo(Note)