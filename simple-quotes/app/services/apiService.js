import axios from "axios";

const BASE_URL = "https://api.quotable.io";

export default async function randomQuote() {
  try {
    const response = await axios.get(`${BASE_URL}/random`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
