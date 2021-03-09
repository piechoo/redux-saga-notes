import React, {Component, useEffect, useState} from "react";
import "./Form.css"
import "./Button.css"
import {useDispatch} from "react-redux";
import {addNote} from "../redux/slices/notesSlice";

const AddNoteForm =(props)=> {

    const [id, setId] = useState('');
    const [fav, setFav] = useState(false);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const handleSubmit =  (event) => {
        addnote()
    };

    const addnote= () => {
        let data ={
            fav,
            tags,
            title,
            content
        }
        dispatch(addNote(data));

    }
        return (
            <form onSubmit={handleSubmit}>
                <label>Wpisz tytuł notatki:<br/></label>
                <input
                    type="text"
                    onChange={event => setTitle(event.target.value )}
                    placeholder="Tytuł "
                    required
                />
                <br/>
                <label>Tagi notatki (oddzielone przecinkiem):<br/></label>
                <input
                    type="text"
                    onChange={event => setTags(event.target.value )}
                    placeholder="Tagi "

                />
                <br/>
                <label>Wpisz zawartość notatki:<br/></label>
                <textarea
                    onChange={event => setContent( event.target.value )}
                    placeholder="Zawartość "
                    required
                />
                <br/>
                <button className="buton big">Utwórz!</button>
            </form>
        );
}

export default AddNoteForm
