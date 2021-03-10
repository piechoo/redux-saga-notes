import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {getNotes, deleteNote, getSearchNotes, getTagedNotes} from "../redux/slices/notesSlice";
import Tags from "./Tags";
import ModalEditNote from "./ModalEditNote";
import {getTags} from "../redux/slices/tagSlice";

function NoteContent(props) {


    const dispatch = useDispatch();
    const options = useSelector((state) => state.options);
    const deleteFunciton = (id,title)=>{
        if(window.confirm(`Czy usunąć notatkę "${title}"?`)) {
            dispatch(deleteNote(id))
            dispatch(getTags());
        }
    }

    return (
        <tr>
            <td colSpan="2" >
                <div className="collapse">
                    <div className="collapse__content">
                        {props.content}
                        <Tags key={props.tags} tags = {props.tags}></Tags>
                    </div>
                    <div className="buttons">
                        <ModalEditNote id={props.id} title={props.title} tags={props.tags} content={props.content} fav={props.fav}></ModalEditNote>
                        <button className="buttons__button" onClick={()=>deleteFunciton(props.id, props.title)}>Usuń notatkę</button>
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default NoteContent