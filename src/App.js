import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteList from "./components/NoteList";
import {Link, Route, Switch} from "react-router-dom";
import AddNoteForm from "./components/AddNoteForm";
import Home from "./components/Home";
import "./App.css"
import './components/Button.css'


function App() {


  const user = useSelector((state) => state.notes);

  let partners = user && user.length > 0 ?
      user.map(p=>
          <div> {p.title} </div>
      ) : <span></span>;


  return (
    <div className="main">
            <Link to="/" className='home-link' > <b>WEBCON Notes</b> </Link>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/createnote"><AddNoteForm /></Route>
            </Switch>
    </div>
  );
}

export default App;
