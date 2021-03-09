import React, {useEffect, useState} from "react";
import "./Form.css"
import "./Button.css"
import './Modal.css'
import Popup from "reactjs-popup";
import {useDispatch} from "react-redux";
import {editNote} from "../redux/slices/notesSlice";
import {getTags} from "../redux/slices/tagSlice";

const ModalEditNote = (props) => {

    const [id, setId] = useState('');
    const [fav, setFav] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    useEffect(()=>  {
        defaultValues()
    },[])

    const defaultValues =()=> {
            setId(props.id)
            setContent(props.content)
            setTitle(props.title)
            setTags(props.tags)
            setFav(props.fav)
    }
    const handleSubmit = (close) => {
        editnote(close)
    };

    const editnote = (close) => {
        let data ={
            id,
            fav,
            tags,
            title,
            content
        }
        dispatch(editNote(data));
        dispatch(getTags());

    }

        return (
            <Popup
                trigger={<button className="buton small"> Edytuj notatkę </button>}
                modal
                nested
            >
                {close => (
                    <div className="modal">
                        <button className="close" onClick={()=>{close(); defaultValues()}}>
                            &times;
                        </button>
                        <div className="header"> Edytuj notatkę </div>
                        <div className="content">
                            <form onSubmit={()=>{handleSubmit(close())}}>
                                <label >Wpisz tytuł notatki:<br/></label>
                                <input
                                    type="text"
                                    onChange={event => setTitle(event.target.value )}
                                    value={title}
                                    required
                                />
                                <br/>
                                <label>Tagi notatki (oddzielone przecinkiem):<br/></label>
                                <input
                                    type="text"
                                    onChange={event => setTags(event.target.value )}
                                    value={tags}

                                />
                                <br/>
                                <label>Wpisz zawartość notatki:<br/></label>
                                <textarea
                                    onChange={event => setContent( event.target.value )}
                                    value={content}
                                    required
                                />
                                <br/>
                                <button className="buton big giga">Edytuj</button>
                            </form>
                            <button className="buton big giga"  onClick={() =>{close(); defaultValues()}} >Anuluj</button>
                        </div>
                    </div>
                )}
            </Popup>
        );

}

export default ModalEditNote
