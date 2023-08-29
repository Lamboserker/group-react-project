import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchSearchResults = async (searchQuery, page = 1, perPage = 40) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: searchQuery,
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

export const fetchNature = async ( page = 1, perPage = 40) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: "nature",
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

// export const fetchNature = async (catPage = 1, perCatPage = 40) => {
//   try {
//     const response = await axios.get(`https://api.unsplash.com/search/photos`, {
//       params: {
//         query: "nature",
//         page: catPage,
//         per_page: perCatPage,
//         client_id: apiKey,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching category results:", error);
//     throw error;
//   }
// };
