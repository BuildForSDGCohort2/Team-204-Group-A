import axios from "axios";

const Ax = axios.create({
  baseURL:
    "https://cors-kila-mahali.herokuapp.com/https://prescribeme-stage.herokuapp.com",
});

export default Ax;
