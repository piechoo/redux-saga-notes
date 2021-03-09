import axios from "axios";

export function requestGetTags() {
    return axios.request({
        method: "get",
        url: "http://localhost:3000/tags"
    });
}
