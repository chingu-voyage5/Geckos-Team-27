import axios from "axios";

export const apiPost = (url, data) =>
  axios.post(url, data).then(res => res.data);

export const apiGet = url => axios.get(url).then(res => res.data);

export const isEmpty = obj => Object.keys(obj).length === 0;
