import urlJoin from 'url-join';

const apiUrl = 'https://api.exchangeratesapi.io/latest';

export const getApiUrl = (endpoint) => urlJoin(apiUrl, endpoint);

export default getApiUrl;
