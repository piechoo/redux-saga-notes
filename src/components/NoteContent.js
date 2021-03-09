import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {getNotes, deleteNote} from "../redux/slices/notesSlice";
import Tags from "./Tags";
import ModalEditNote from "./ModalEditNote";
import {getTags} from "../redux/slices/tagSlice";

function NoteContent(props) {


    const dispatch = useDispatch();

    const deleteFunciton = (id)=>{
        if(window.confirm("Czy usunąć notatkę ?")) {
            dispatch(deleteNote(id))
            dispatch(getTags());
        }
    }

    return (
        <tr>
            <td colSpan="2" >
                <div className={"collapse in"}>
                    <div className="content">
                        {props.content}
                        <Tags key={props.tags} tags = {props.tags}></Tags>
                    </div>
                    <div className="buttons">
                        <ModalEditNote id={props.id} title={props.title} tags={props.tags} content={props.content} fav={props.fav}></ModalEditNote>
                        <button className="buton small" onClick={()=>deleteFunciton(props.id)}>Usuń notatkę</button>
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default NoteContent