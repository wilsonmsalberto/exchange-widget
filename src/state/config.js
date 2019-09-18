import urlJoin from 'url-join';

const apiKey = `?app_id=${process.env.API_KEY}`;
const apiUrl = 'https://openexchangerates.org/api/latest.json';

export const getApiUrl = (endpoint) => urlJoin(apiUrl, apiKey, endpoint);

export default getApiUrl;
