import React from "react";
import { useState, useEffect } from "react";
import ImgCloud from "../images/cloud.jpg"
const Weather = () => {
  const apikey = import.meta.env.VITE_APIKEY;
  const API = `http://api.openweathermap.org/geo/1.0/direct?q=Delhi&limit=1&appid=${apikey}`;
  const [weatherData, setweatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <main className="w-screen h-screen bg-slate-300">
        <div className="p-10 flex ">
          {loading && (
            <p className="text-2xl text-center my-5">
              wait getting the weather report
            </p>
          )}
          {error && <p className="text-2xl text-center my-5">Error:{error}</p>}
          <div className="section-1  w-1/3 h-auto p-5 flex flex-row justify-center bg-white">
            {weatherData && weatherData.main && (
              <div className="">
                <input type="text" />
                <img src={ImgCloud} className="w-40 h-40 "  alt="cloudImg" />
                <p className="text-center text-3xl p-5">{Math.floor(weatherData.main.temp) - 272} <span>&deg; C</span> </p>
              </div>
            )}
          </div>
          <div className="w-2/3 bg-slate-500">2</div>
        </div>
      </main>
    </>
  );
};

export default Weather;
