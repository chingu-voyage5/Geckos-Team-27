import axios from "axios";

export const apiPost = (url, data) =>
  axios.post(url, data).then(res => res.data);

export const apiGet = url => axios.get(url).then(res => res.data);

export const apiPatch = (url, data) =>
  axios.patch(url, data).then(res => res.data);

export const capitalize = text => text[0].toUpperCase() + text.slice(1);

export const formatJoinDate = date => {
  const year = date.slice(-4);
  const monthDay = date.slice(0, -4);
  if (monthDay.length === 3) {
    const day = monthDay.slice(1);
    const month = monthDay.slice(0, 1);
    return `${day}-${month}-${year}`;
  }
};

export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const originalValueOrEmptyStr = value =>
  (value = !isEmpty(value) ? value : "");
