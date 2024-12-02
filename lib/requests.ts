import axios from "axios";

const wpApiClient = axios.create({
    baseURL: process.env.API_BASE_URL || "NO_API_BASE_URL",
    headers: {
        "Content-Type": "application/json",
    },
});

export default wpApiClient;
