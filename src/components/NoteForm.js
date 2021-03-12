import React, {memo,useEffect, useState} from "react";
import "./Form.scss"
import {useDispatch, useSelector} from "react-redux";
import {addNote, editNote} from "../redux/slices/notesSlice";
import {getTags} from "../redux/slices/tagSlice";
import PropTypes from "prop-types";

const NoteForm =(props)=> {


    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();


    useEffect(()=>  {
        if(props.edit)
            defaultValues()
    },[])

    const defaultValues =()=> {
        setContent(props.content)
        setTitle(props.title)
        setTags(props.tags)
    }
    const options = useSelector((state) => state.options);
    const addnote = (close) => {

        let dataBefore ={
            fav:false,
            tags,
            title,
            content
        }
        if(props.edit) {
            let data = Object.assign({id: props.id, fav: props.fav}, dataBefore)
            dispatch(editNote({data,options}))
            dispatch(getTags());
            close()
        }
        else {
            let data = dataBefore
            dispatch(addNote(data));
            defaultValues()
            if(options.error){
                window.alert(`Błąd ! Nie udało się dodać notatki`)
            }
        else {
                window.alert(`Dodano notatke o tytule: ${title}`)
            }
        }

    }

    const canSave = Boolean(title) && Boolean(tags) && Boolean(content)
    return (
        <div className='content'>
            <form className='content__form' >
                <label className='content__label'>Wpisz tytuł notatki:<br/></label>
                <input className='content__input'
                       type="text"
                       value={ title }
                       onChange={event => setTitle(event.target.value )}
                       placeholder="Tytuł "
                       required
                />
                <br/>
                <label className='content__label' >Tagi notatki (oddzielone przecinkiem):<br/></label>
                <input className='content__input'
                       type="text"
                       value= {tags }
                       onChange={event => setTags(event.target.value )}
                       placeholder="Tagi "

                />
                <br/>
                <label className='content__label' >Wpisz zawartość notatki:<br/></label>
                <textarea className='content__textarea'
                          value={ content }
                          onChange={event => setContent( event.target.value )}
                          placeholder="Zawartość "
                          required
                />
                <br/>
                <button type='button' className="content__button" disabled={!canSave} onClick={()=>addnote(props.close)}>{props.accept}</button>
                <br/>
                {props.edit ? <button type='button' className="content__button content__button--last"  onClick={() =>props.close()} >Anuluj</button>:""}
            </form>
        </div>
    );
}
NoteForm.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.string,
    fav: PropTypes.bool,
    accept:PropTypes.string,
    edit:PropTypes.bool,
    close:PropTypes.func
}
NoteForm.defaultProps = {
    title: 'tytul domyślnej notatki',
    content: 'zawartosc domyślnej notatki',
    tags: 'tagi,domyślnej, notatki',
    id: '123',
    fav: false,
    accept:'tekst na przycisku akceptacji',
    edit:false,

};
export default memo(NoteForm)
