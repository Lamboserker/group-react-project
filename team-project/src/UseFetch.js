import axios from 'axios';
import { createApi } from "unsplash-js";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

// Function to fetch search results
export const fetchSearchResults = async (searchQuery, page = 1, perPage = 10) => {
  try {
    const response = await axios.get(`${apiUrl}/search/photos`, {
      params: {
        query: searchQuery,
        page,
        per_page: perPage,
        client_id: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    // Hier kannst du den Fehler behandeln oder weitergeben
    console.error('Error fetching search results:', error);
    throw error;
  }
};

const api = createApi({
  accessKey: process.env.REACT_APP_API_KEY,
});

export const fetchPhotos = (query, orientation) => {
  return api.search.getPhotos({ query, orientation });
};

// You can add more functions for other API calls if needed

// Export other API functions
