import axios from "axios";

// const KEY = "AIzaSyBLQ7tW1fctaXszWQ7ZLe6XpX0tDa03J4Q";
const KEY = "AIzaSyAXy8l36VJLdM5YJvFSsq_PTYJC1nwY6MM";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 5,
      key: KEY,
      type: "video",
    },
});
