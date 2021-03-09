import React, { useEffect} from "react";
import Note from "./Note";
import { useDispatch, useSelector } from "react-redux";

import { getNotes } from "../redux/slices/notesSlice";


function NoteList(props) {

    const dispatch = useDispatch();



    const notes = props.notes

    let rendering = notes && notes.length > 0 ?
        notes.map(note=>
            <Note key={note.id} title ={note.title} id={note.id} fav={note.fav} content={note.content} tags={note.tags} ></Note>
        ) : <span></span>;

   let Styling = {paddingBottom:"30px"};

    return (
        <div style={Styling}>
            {rendering}
        </div>
    );
}

export default NoteList
