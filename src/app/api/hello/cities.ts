import axios from "axios";

export const getCitiesByCountry = async () => {
  const url = `https://countriesnow.space/api/v0.1/countries/population/cities`;
  const response = await axios.get(url);
  return response.data;
};