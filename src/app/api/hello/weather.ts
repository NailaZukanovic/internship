import axios from "axios";

export const getWeatherForCity = async (cityName: string) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${process.env.WEATHER_API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};