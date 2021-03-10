import React, {useEffect, useState} from "react";
import "./Form.scss"
import './Modal.scss'
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
                trigger={<button className="buttons__button"> Edytuj notatkę </button>}
                modal
                nested
            >
                {close => (
                    <div className="modal">
                        <button className="modal__close-btn" onClick={()=>{close(); defaultValues()}}>
                            &times;
                        </button>
                        <div className="modal__header"> Edytuj notatkę </div>
                        <div className="content">
                            <form className='content__form' onSubmit={()=>{handleSubmit(close())}}>
                                <label className='content__label content__label--modal' >Wpisz tytuł notatki:<br/></label>
                                <input className='content__input'
                                       type="text"
                                       onChange={event => setTitle(event.target.value )}
                                       value={title}
                                       required
                                />
                                <br/>
                                <label className='content__label content__label--modal' >Tagi notatki (oddzielone przecinkiem):<br/></label>
                                <input className='content__input'
                                       type="text"
                                       onChange={event => setTags(event.target.value )}
                                       value={tags}

                                />
                                <br/>
                                <label className='content__label content__label--modal'>Wpisz zawartość notatki:<br/></label>
                                <textarea className='content__textarea'
                                          onChange={event => setContent( event.target.value )}
                                          value={content}
                                          required
                                />
                                <br/>
                                <button className="content__button">Edytuj</button>
                            </form>
                            <button className="content__button content__button--last"  onClick={() =>{close(); defaultValues()}} >Anuluj</button>
                        </div>
                    </div>
                )}
            </Popup>
        );

}

export default ModalEditNote
