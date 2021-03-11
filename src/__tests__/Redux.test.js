import reducer, {setNotes} from '../redux/slices/notesSlice'

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                notes:[]
            }
        )
    })


    it('should handle ADD_TODO', () => {

        expect(
            reducer([], {
                type: setNotes.type,
                payload: {
                    data: {
                        title: "1234",
                        content: "lista zakupów nowa",
                        tags: "kiełbasa,kapusta,mleko",
                        fav: false,
                        id: "youdLpf6U"
                    }
                }
            })
        ).toEqual(
            {
                title: "1234",
                content: "lista zakupów nowa",
                tags: "kiełbasa,kapusta,mleko",
                fav: false,
                id: "youdLpf6U"
            }
        )

        expect(
            reducer(
                {
                    notes: {
                        title: "1234",
                        content: "lista zakupów nowa",
                        tags: "kiełbasa,kapusta,mleko",
                        fav: false,
                        id: "youdLpf6U"
                    }
                },
                {
                    type: setNotes.type,
                    payload: {
                        data: {
                            title: "ESSA",
                            content: "BENGBENG",
                            tags: "SIUP,WZIUM",
                            fav: false,
                            id: "-4iZHi2Wz"
                        }
                    }
                }
            )
        ).toEqual({
            title: "ESSA",
            content: "BENGBENG",
            tags: "SIUP,WZIUM",
            fav: false,
            id: "-4iZHi2Wz"
        })
    })
})