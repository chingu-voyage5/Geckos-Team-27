export const api = url => fetch(url).then(res => res.json());
export const capitalize = text => text[0].toUpperCase() + text.slice(1);
