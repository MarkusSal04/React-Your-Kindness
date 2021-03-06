import axios from 'axios'

const apiKey = process.env.REACT_APP_AIRTABLE_KEY
const baseURL = "https://api.airtable.com/v0/appw5lF40FOHoirWQ/Table%201"

const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
}

export const getAllQuotes = async () => {
  try {
    const res = await axios.get(baseURL, config)
    console.log()
    return res.data.records
  } catch (error){
    console.error(error)
  }
}







export const createQuote = async (form) => {
  try {
    const res = await axios.post(`${baseURL}/`, { fields: form }, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}