import axios from "axios";

export const apiPost = (url, data) =>
  axios.post(url, data).then(res => res.data);

export const apiGet = url => axios.get(url).then(res => res.data);

export const isEmpty = obj => Object.keys(obj).length === 0;
export const capitalize = text => text[0].toUpperCase() + text.slice(1);
export const queryToLocation = url =>
  url
    .replace("%20", " ")
    .match(/(\?query=([a-zA-Z ]+))/gi)[0]
    .replace("?query=", "");
