"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper } from "@mantine/core";
import { getCitiesByCountry } from "../api/hello/cities";
import { getWeatherForCity } from "../api/hello/weather";
import { useRouter, useSearchParams } from "next/navigation";

export default function CityDetails() {
  const router = useRouter();
  const { name} = useSearchParams();
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    getWeatherForCity(name as string).then((data) => setWeatherData(data));
  }, []);

  return (
    <div>
      <h1>New York City Details</h1>
      <Grid columns={4}>
        {weatherData.map((data:any) => (
          <Paper key={data.name}>
            <h1>City name passed via button: {name}</h1>
            <p>Name: {data.name}</p>
            <p>Lat: {data.lat}</p>
            <p>Lon: {data.lon}</p>
            <p>Country: {data.county}</p>
            <p>State: {data.state}</p>
          </Paper>
        ))}
      </Grid>
    </div>
  );
}