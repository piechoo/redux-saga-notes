import React, { useState} from "react";
import "./Form.scss"
import {useDispatch} from "react-redux";
import {addNote} from "../redux/slices/notesSlice";

const AddNoteForm =(props)=> {


    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const handleSubmit =  (event) => {
        addnote()
    };

    const addnote= () => {
        let data ={
            fav:false,
            tags,
            title,
            content
        }
        dispatch(addNote(data));

    }
        return (
            <div className='content'>
                <form className='content__form' onSubmit={handleSubmit}>
                    <label className='content__label'>Wpisz tytuł notatki:<br/></label>
                    <input className='content__input'
                           type="text"
                           onChange={event => setTitle(event.target.value )}
                           placeholder="Tytuł "
                           required
                    />
                    <br/>
                    <label className='content__label' >Tagi notatki (oddzielone przecinkiem):<br/></label>
                    <input className='content__input'
                           type="text"
                           onChange={event => setTags(event.target.value )}
                           placeholder="Tagi "

                    />
                    <br/>
                    <label className='content__label' >Wpisz zawartość notatki:<br/></label>
                    <textarea className='content__textarea'
                              onChange={event => setContent( event.target.value )}
                              placeholder="Zawartość "
                              required
                    />
                    <br/>
                    <button className="content__button">Utwórz!</button>
                </form>
            </div>
        );
}

export default AddNoteForm
