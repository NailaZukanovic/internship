"use client";

import { Table, Text } from '@mantine/core';
import { getCitiesByCountry } from '../api/hello/cities';
import { useState, useEffect } from 'react';
import Link from 'next/link';
function Main() {
  const [cities, setCities] = useState<any>([]);

  useEffect(() => {
    getCitiesByCountry().then((data) => setCities(data));
  }, []);

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    setCities(cities.filter(function (el:any) {
      return el.country == searchText;
    }));
  };

  const handleInputChange = (event: any) => {
    setSearchText(event.target.value);
  };
  return (
    <>
    <input
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
        style={{ marginRight: '1rem' }}
      />
      <button onClick={handleSearch}>Search</button>
      <Text>Search:</Text>
      <Table>
        <h1>Cities</h1>
        <thead>
          <tr>
            <td>City Name</td>
            <td>Country Name</td>
          </tr>
        </thead>
        <tbody>
          {cities?.map((city:any) => (
            <tr key={city.city}>
              <td>{city.city}</td>
              <td>{city.country}</td>
              <td><Link href={`/city-details?name=${city.city}`}>
      <button>Go do details page</button>
      </Link>
      </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Main;