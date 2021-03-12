import React from "react";
import Note from "./Note";
import "./NoteList.scss"
import PropTypes from 'prop-types'


function NoteList(props) {

    const {notes} = props

    let rendering = notes && notes.length > 0 ?
        notes.map(note=>
            <Note key={note.id} title ={note.title} id={note.id} fav={note.fav} content={note.content} tags={note.tags} ></Note>
        ) : <span className="noteList__empty"><b>BRAK NOTATEK !</b></span>;

    return (
        <div className="noteList" >
            {rendering}
        </div>
    );
}
NoteList.propTypes = {
    notes: PropTypes.array
}
NoteList.defaultProps = {
    notes: []
};
export default NoteList
