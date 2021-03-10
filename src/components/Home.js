import React, { useEffect, useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import AddNoteButton from "./AddNoteButton";
import { useDispatch, useSelector } from "react-redux";
import NoteList from "./NoteList";
import "./Home.css"
import {getLikedNotes, getNotes, getSearchNotes, getTagedNotes} from "../redux/slices/notesSlice";
import {getTags} from "../redux/slices/tagSlice";
import {setTag, setSearch, freeSearch, freeTag} from "../redux/slices/optionsSlice";


const Home = (props)=> {


    const [selectedTag, setSelectedTag] = useState('');
    const [selectedSearch, setSelectedSearch] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTags());
        dispatch(getNotes());
    }, [dispatch]);

    var tags = []
    tags = useSelector((state) => state.tags);
    var notes = useSelector((state) => state.notes);

    if(tags.length!==0) {
        var tagi = tags.filter(item => item !== '')
        tagi.unshift("Polubione Notatki")
    }


    const onSelect = (selectedList, selectedItem) => {

        dispatch(setTag({tagItem:selectedItem}))
        if ( selectedItem === "Polubione Notatki")
            dispatch(getLikedNotes())
        else
            dispatch(getTagedNotes(selectedItem))
    }

    const onSearch = ( searchItem) =>{
        dispatch(setSearch({searchItem:searchItem}))
        dispatch(getSearchNotes(searchItem))
        if(searchItem==='')
            dispatch(freeSearch())
    }

    const onRemove = (selectedList, removedItem) => {
        setSelectedTag('')
        dispatch(getNotes())
        dispatch(freeTag())
    }

        return (
                <div className='home'>
                    <Multiselect
                        selectionLimit={1}
                        options={tagi} // Options to display in the dropdown
                        onSelect={onSelect} // Function will trigger on select event
                        onRemove={onRemove} // Function will trigger on remove event
                        onSearch={onSearch} // Function will trigger on remove event
                        placeholder="Wpisz tag lub wybierz z listy:"
                        isObject={false}
                    />
                    <AddNoteButton></AddNoteButton>
                    <NoteList notes = {notes} ></NoteList>
                </div>
        );
}

export default Home;