import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import AddNoteForm from "./components/AddNoteForm";
import Home from "./components/Home";
import "./App.css"
import './components/Button.scss'


function App() {

  return (
    <div className="main">
            <Link to="/" className='main__link' > <b>WEBCON Notes</b> </Link>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/createnote"><AddNoteForm /></Route>
            </Switch>
    </div>
  );
}

export default App;
