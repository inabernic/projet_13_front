import axios from "axios";

/*Creating a new axios instance with baseURL, headers and timeout. */
export default axios.create({
    baseURL: "http://localhost:3001/api/v1/",
    headers: {
        Accept: "*/*",
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
    },
    timeout: 2500,
});