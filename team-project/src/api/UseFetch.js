import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchSearchResults = async (
  searchQuery,
  page = 1,
  perPage = 100,
  order_by = 'popular'
) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: searchQuery,
        page: page,
        per_page: perPage,
        client_id: apiKey,
       order_by: order_by,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};

export const fetchUserImages = async (url, page = 1, perPage = 40) => {
  try {
    const response = await axios.get(`${url}`, {
      params: {
        page: page,
        per_page: perPage,
        client_id: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
