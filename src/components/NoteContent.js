import {useDispatch, useSelector} from "react-redux";
import React,{memo} from "react";
import {deleteNote} from "../redux/slices/notesSlice";
import Tags from "./Tags";
import ModalEditNote from "./ModalEditNote";
import {getTags} from "../redux/slices/tagSlice";
import PropTypes from "prop-types";

function NoteContent(props) {


    const dispatch = useDispatch();
    const options = useSelector((state) => state.options);
    const deleteFunction = (id,title)=>{
        if(window.confirm(`Czy usunąć notatkę "${title}"?`)) {
            dispatch(deleteNote({id,options}))
            dispatch(getTags());
        }
    }

    return (

        <tr>
            <td colSpan="2" >
                <div className="collapse">
                    <div className="collapse__content">
                        <p>{props.content}</p>
                        <Tags key={props.tags} tags = {props.tags}></Tags>
                    </div>
                    <div className="buttons">
                        <ModalEditNote {...props}></ModalEditNote>
                        <button className="buttons__button" onClick={()=>deleteFunction(props.id, props.title)}>Usuń notatkę</button>
                    </div>
                </div>
            </td>
        </tr>
    );
}

NoteContent.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.string,
    fav: PropTypes.bool
}
NoteContent.defaultProps = {
    title: 'tytul domyślnej notatki',
    content: 'zawartosc domyślnej notatki',
    tags: 'tagi,domyślnej, notatki',
    id: '123',
    fav: false
};
export default memo(NoteContent)