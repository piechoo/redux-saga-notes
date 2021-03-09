import React, { useEffect, useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import AddNoteButton from "./AddNoteButton";
import { useDispatch, useSelector } from "react-redux";
import NoteList from "./NoteList";
import "./Home.css"
import {getLikedNotes, getNotes, getSearchNotes, getTagedNotes} from "../redux/slices/notesSlice";
import {getTags} from "../redux/slices/tagSlice";


const Home = (props)=> {


    const [search, setSearch] = useState(false);
    const [searchItem, setSearchItem] = useState('');
    const [selectedTag, setSelectedTag] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTags());
        if(!search && selectedTag==='')
            dispatch(getNotes());
    }, [dispatch]);

    var tags = []
    tags = useSelector((state) => state.tags);
    var notes = useSelector((state) => state.notes);

    if(tags.length!=0) {
        var tagi = tags.filter(item => item !== '')
        tagi.unshift("Polubione Notatki")
    }


    const onSelect = (selectedList, selectedItem) => {
        if ( selectedItem === "Polubione Notatki")
            dispatch(getLikedNotes())
        else
            dispatch(getTagedNotes(selectedItem))
    }

    const onSearch = ( searchItem) =>{
        setSearch(true)
        setSearchItem(searchItem)
        dispatch(getSearchNotes(searchItem))

    }

    const onRemove = (selectedList, removedItem) => {
        setSelectedTag('')
        dispatch(getNotes())
    }

        return (
            <div>
                <div >
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
            </div>
        );
}

export default Home;