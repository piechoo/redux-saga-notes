import React from "react";
import {Link, Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import "./App.scss"
import NoteForm from "./components/NoteForm";


function App() {

  return (
    <div className="main">
            <Link to="/" className='main__link' > <b>WEBCON Notes</b> </Link>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/createnote"><NoteForm edit={false} accept='Dodaj!' title='' content='' tags='' /></Route>
            </Switch>
    </div>
  );
}

export default App;
