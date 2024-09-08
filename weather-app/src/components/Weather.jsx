import React from "react";
import { useState, useEffect } from "react";
import ImgCloud from "../images/cloud.jpg";
const Weather = () => {
  const apikey = import.meta.env.VITE_APIKEY;
  const [city, setCity] = useState("delhi");
  const API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`;
  const [weatherData, setweatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
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
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();

  return (
    <>
      <main className="w-screen bg-slate-300">
        <div className="p-5 md:p-10 flex flex-col md:flex-row">
          <div className="section-1 w-full md:w-1/3 h-auto p-5 flex flex-col items-center bg-white rounded-lg shadow-lg">
            {weatherData && weatherData.main && weatherData.weather && (
              <div className="w-auto">
                <div className="border-solid text-lg flex flex-col md:flex-row justify-center items-center md:justify-between px-3 mb-4 rounded-3xl bg-slate-200">
                  <form
                    onSubmit={handleSubmit}
                    className="flex items-center w-full"
                  >
                    <input
                      className="bg-slate-200 flex-grow p-2 rounded-l-lg"
                      type="text"
                      value={city}
                      onChange={handleInputChange}
                      placeholder="Enter city name"
                    />
                    <button
                      type="submit"
                      className=" text-white p-2  rounded-r-lg   hover:bg-blue-600"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
                <img
                  src={ImgCloud}
                  className="w-24 h-20 md:w-40 md:h-40 mx-auto"
                  alt="cloudImg"
                />
                <p className="text-center text-2xl md:text-3xl p-2 pt-2">
                  {Math.floor(weatherData.main.temp) - 272} <span>&deg; C</span>
                </p>
                <p className="p-2 text-center text-sm md:text-base">
                  {weatherData.weather[0].description}
                </p>
                <div className="border-solid border-2 border-slate-300 my-2"></div>
                <div className="p-5">
                  <p className="text-center text-sm md:text-base">
                    {months[date.getMonth()]} {date.getDate()},{" "}
                    {date.getFullYear()}
                  </p>
                </div>
                <div className="text-xl md:text-2xl text-center p-5">
                  {weatherData.name}
                </div>
              </div>
            )}
          </div>
          {/* <div className="w-full md:w-2/3 bg-slate-500">2</div> */}
        </div>
      </main>
    </>
  );
};

export default Weather;
