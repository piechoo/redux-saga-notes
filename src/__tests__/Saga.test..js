import { call, put } from "redux-saga/effects";

import {handleDeleteNote, handleGetNotes} from "../redux/sagas/handlers/note";
import {getLikedNotes, getNotes, getSearchNotes, getTagedNotes, setNotes} from "../redux/slices/notesSlice";
import {requestDeleteNote, requestGetNotes} from "../redux/sagas/requests/note";

describe("handleGetNotes saga tests", () => {

    it("should call requestGetNotes and then put setNotes(data) in case of success and be done", async () => {
        const data = [
            {
                title: "1234",
                content: "lista zakupów nowa",
                tags: "kiełbasa,kapusta,mleko",
                fav: false,
                id: "youdLpf6U"
            },
            {
                title: "ESSA",
                content: "BENGBENG",
                tags: "SIUP,WZIUM",
                fav: false,
                id: "-4iZHi2Wz"
            }
        ];

        const dispatched = [];
        const res = [];

        let gen = handleGetNotes()
        dispatched.push(gen.next().value)
        dispatched.push(gen.next({data}).value)

        res.push(call(requestGetNotes))
        res.push(put(setNotes({data})))

        expect(dispatched).toEqual(res);
        expect(gen.next().done).toEqual(true);
    });

    it("should console log network error", async () => {

        const consoleSpy = jest.spyOn(console, 'log');
        let error = new Error('Network Error');
        let gen = handleGetNotes()
        gen.next()
        gen.throw(error)

        expect(consoleSpy).toHaveBeenCalledWith(error);
    });
});

describe("handleDeleteNotes saga tests", () => {

    const tagData = {
        id:123,
        options: {
            search: false,
            searchItem: '',
            tag: true,
            tagItem: 'mleko'
        }};
    const likeData = {
        id:123,
        options: {
            search: false,
            searchItem: '',
            tag: true,
            tagItem: "Polubione Notatki"
        }};
    const searchData = {
        id:123,
        options: {
            search: true,
            searchItem: 'search',
            tag: false,
            tagItem: ''
        }};
    const noneData = {
        id:123,
        options: {
            search: false,
            searchItem: '',
            tag: false,
            tagItem: ''
        }};

    it("should call requestDeleteNote and then put getTagedNotes() and be done", async () => {

        const dispatched = [];
        const res = [];
        const taged = {
            payload:tagData
        }
        let gen = handleDeleteNote(taged)
        dispatched.push(gen.next().value)
        dispatched.push(gen.next().value)

        res.push(call(requestDeleteNote,tagData.id))
        res.push(put(getTagedNotes(tagData.options.tagItem)))

        expect(dispatched).toEqual(res);
        expect(gen.next().done).toEqual(true);
    });



    it("should call requestDeleteNote and then put getSearchNotes() and be done", async () => {

        const dispatched = [];
        const res = [];
        const searched = {
            payload:searchData
        }
        let gen = handleDeleteNote(searched)
        dispatched.push(gen.next().value)
        dispatched.push(gen.next().value)

        res.push(call(requestDeleteNote,searchData.id))
        res.push(put(getSearchNotes(searchData.options.searchItem)))

        expect(dispatched).toEqual(res);
        expect(gen.next().done).toEqual(true);
    });

    it("should call requestDeleteNote and then put getNotes() and be done", async () => {

        const dispatched = [];
        const res = [];
        const none = {
            payload:noneData
        }
        let gen = handleDeleteNote(none)
        dispatched.push(gen.next().value)
        dispatched.push(gen.next().value)

        res.push(call(requestDeleteNote,noneData.id))
        res.push(put(getNotes()))

        expect(dispatched).toEqual(res);
        expect(gen.next().done).toEqual(true);
    });
    it("should call requestDeleteNote and then put getLikedNotes() and be done", async () => {

        const dispatched = [];
        const res = [];
        const liked = {
            payload:likeData
        }
        let gen = handleDeleteNote(liked)
        dispatched.push(gen.next().value)
        dispatched.push(gen.next().value)

        res.push(call(requestDeleteNote,likeData.id))
        res.push(put(getLikedNotes()))

        expect(dispatched).toEqual(res);
        expect(gen.next().done).toEqual(true);
    });
});