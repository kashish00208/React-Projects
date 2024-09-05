import React from "react";
import { useState, useEffect } from "react";
const Weather = () => {
  const apikey = import.meta.env.VITE_APIKEY;
  const API = `http://api.openweathermap.org/geo/1.0/direct?q=Delhi&limit=1&appid=${apikey}`;
  const [weatherData, setweatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function converstion() {}

  const getData = async (lat, lon, country) => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Error while generating response");
      }
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        const location = data[0];
        lat = location.lat;
        lon = location.lon;
        country = location.name;
        const BaseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
        const weatherResponse = await fetch(BaseUrl);
        if (!weatherResponse.ok) {
          throw new Error("Error while getting data by API");
        }
        const weatherData = await weatherResponse.json();
        setweatherData(weatherData);
        const mainData = weatherData.main;
        const windData = weatherData.wind;
        console.log(weatherData);
        console.log(mainData.temp);
        console.log(windData);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <main>
        <div className="section-1">
          <h2>WeatherWave</h2>
          {loading && <p>Loading..........</p>}
          {error && <p>Error:{error}</p>}
          {weatherData && (
            <div>
              <h3>Weather data</h3>
              <p>{weatherData.name}</p>
            </div>
          )}
          {weatherData && weatherData.main && (
            <div>
              <p>{Math.floor(weatherData.main.temp) - 272}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Weather;
