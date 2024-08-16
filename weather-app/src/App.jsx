import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function App() {
  APIKEY = process.env.REACT_APP_WEATHER_API_KEY;
  const API = `http://api.openweathermap.org/geo/1.0/direct?q=Delhi&limit=1&appid=${APIKEY}`;

  const[weatherData,GetData] = useState(null);

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
        console.log(lat);
        console.log(lon);
        console.log(country);

        // Construct the weather API URL
        const BaseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
        const weatherResponse = await fetch(BaseUrl);
        if (!weatherResponse.ok) {
          throw new Error("Error while getting data by API");
        }
        const FinalData = await weatherResponse.json();
        console.log(FinalData);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(()=>{
    getData();
  },[])

  return (
    <>
      <main>
        <div className="section-1"></div>
        <div className="Section-2">
          <h2>WeatherWave</h2>
          <button>Get Started</button>
        </div>
      </main>
    </>
  );
}

export default App;
