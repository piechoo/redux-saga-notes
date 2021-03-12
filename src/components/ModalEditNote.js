import React,{memo} from "react";

import './Modal.scss'
import Popup from "reactjs-popup";

import NoteForm from "./NoteForm";
import PropTypes from "prop-types";

const ModalEditNote = (props) => {

        return (
            <Popup
                trigger={<button className="buttons__button"> Edytuj notatkę </button>}
                modal
                nested
            >
                {close => (
                    <div className="modal">
                        <button className="modal__close-btn" onClick={()=>{close()}}>
                            &times;
                        </button>
                        <div className="modal__header"> Edytuj notatkę </div>
                            <NoteForm id={props.id} title={props.title} content={props.content} fav={props.fav} tags={props.tags} accept='Edytuj!' edit={true} close={close} ></NoteForm>
                    </div>
                )}
            </Popup>
        );

}
ModalEditNote.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.string,
    fav: PropTypes.bool
}

ModalEditNote.defaultProps = {
    title: 'tytul domyślnej notatki',
    content: 'zawartosc domyślnej notatki',
    tags: 'tagi,domyślnej, notatki',
    id: '123',
    fav: false
};

export default memo(ModalEditNote)
