import React from "react";
import "./Button.scss"
import { Link } from "react-router-dom";

class AddNoteButton extends React.Component {

    render() {
        return (
            <div className="container">
                <Link to="/createnote" className='container__button' > <b>+</b> Dodaj nową notatkę</Link>
            </div>
        );
    }
}

export default AddNoteButton
