import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

// Function to fetch search results
export const fetchSearchResults = (searchQuery, page = 1, perPage = 1) => {
  return axios.get(`${apiUrl}/search/photos`, {
    params: {
      query: searchQuery,
      page,
      per_page: perPage,
      client_id: apiKey,
      
    },
  });
};

// You can add more functions for other API calls if needed

// Export other API functions

export const fetchDownloadDrop = (searchQuery, page = 1, perPage = 1) => {
  return axios.get(`${apiUrl}/search/photos`, {
    params: {
      query: searchQuery,
      page,
      per_page: perPage,
      client_id: apiKey,
    },
  });
};