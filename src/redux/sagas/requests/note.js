import axios from "axios";


export function requestGetNotes() {
    return axios.request({
        headers: { Pragma: 'no-cache'},
        method: "get",
        url: "http://localhost:3000/notes"
    });
}

export function requestGetSearchNotes(query) {
    return axios.request({
        headers: { Pragma: 'no-cache'},
        method: "get",
        url: `http://localhost:3000/search?q=${query}`
    });
}

export function requestGetLikedNotes() {
    return axios.request({
        headers: { Pragma: 'no-cache'},
        method: "get",
        url: "http://localhost:3000/notes/favourites"
    });
}

export function requestGetTagedNotes(tag) {
    return axios.request({
        headers: { Pragma: 'no-cache'},
        method: "get",
        url: `http://localhost:3000/notes/tags/${tag}`
    });
}


export function requestDeleteNote(id) {
    return axios.request({
        headers: { Pragma: 'no-cache'},
        method: "delete",
        url: `http://localhost:3000/notes/${id}`
    });
}

export function requestEditNote(data) {
    let config = {
        headers: { Pragma: 'no-cache'},
    }

    return axios.put(`http://localhost:3000/notes/${data.id}`,
        {
            id:data.id,
            fav:data.fav,
            tags:data.tags,
            title:data.title,
            content:data.content
        },
        config
    );
}


export function requestAddNote(data) {
    let config = {
        headers: { Pragma: 'no-cache'},
    }
    return axios.post(`http://localhost:3000/notes/`,
        {
            fav:data.fav,
            tags:data.tags,
            title:data.title,
            content:data.content
        },
        config
    );
}