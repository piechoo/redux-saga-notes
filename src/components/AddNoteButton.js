import React from "react";
import "./Button.scss"
import { Link } from "react-router-dom";

 function AddNoteButton () {
        return (
            <div className="container">
                <Link to="/createnote" className='container__button' > <b>+</b> Dodaj nową notatkę</Link>
            </div>
        );

}

export default AddNoteButton
