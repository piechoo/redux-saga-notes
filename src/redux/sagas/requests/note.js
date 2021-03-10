import axios from "axios";

export function requestGetNotes() {
    return axios.request({
        method: "get",
        url: "http://localhost:3000/notes"
    });
}

export function requestGetSearchNotes(query) {
    return axios.request({
        method: "get",
        url: `http://localhost:3000/search?q=${query}`
    });
}

export function requestGetLikedNotes() {
    return axios.request({
        method: "get",
        url: "http://localhost:3000/notes/favourites"
    });
}

export function requestGetTagedNotes(tag) {
    return axios.request({
        method: "get",
        url: `http://localhost:3000/notes/tags/${tag}`
    });
}


export function requestDeleteNote(id) {
    console.log(id)
    return axios.request({
        method: "delete",
        url: `http://localhost:3000/notes/${id}`
    });
}

export function requestEditNote(data) {
    return axios.put(`http://localhost:3000/notes/${data.id}`,
        {
            id:data.id,
            fav:data.fav,
            tags:data.tags,
            title:data.title,
            content:data.content
        }
    );
}


export function requestAddNote(data) {
    return axios.post(`http://localhost:3000/notes/`,
        {
            fav:data.fav,
            tags:data.tags,
            title:data.title,
            content:data.content
        }
    );
}