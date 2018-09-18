// import apiKey from '../../apiKey.js';
import { cleanData } from '../helper/helper.js';

export const getRelatedData = async (search) => {
  // const key = apiKey;
  const key = process.env.REACT_APP_API_KEY
  console.log(key)
  const url = `https://tastedive.com/api/similar?q=${search}&k=${key}&info=1`;
  console.log(url)
  try {
    const response = await fetch(url);
    const data = await response.json();
    const unresolvedData = cleanData(data);
    return Promise.all(unresolvedData);
  } catch (error) {
    throw new Error(error.message);
  }
};
