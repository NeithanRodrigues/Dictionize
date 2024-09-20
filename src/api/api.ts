import axios from "axios";

export const searchWord = async (word: string): Promise<any> => {
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`); 
    console.log(response.data);
    return await response.data[0];
  } catch (error) {
    console.error('Error when searching for word.');
    throw error;
  }
};