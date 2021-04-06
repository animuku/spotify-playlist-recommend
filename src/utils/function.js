import axios from "axios";
import { get } from '../utils/api';


export const getParamValues = (url) => {
    return url
      .slice(1)
      .split('&')
      .reduce((prev, curr) => {
        const [title, value] = curr.split('=');
        prev[title] = value;
        return prev;
      }, {});
};


export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem('params'));
    if (params) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};

export const initiateGetResult = async(searchTerm) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=artist`;
      const result = await get(API_URL);
      // console.log(result);
      return result;
    }
    catch (error) {
      console.log('error', error);
    }
};


