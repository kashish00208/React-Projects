import { useEffect, useState } from "react";
function App() {
  const APIKEY = process.env.REACT_APP_API_KEY;
  const API = `http://api.openweathermap.org/geo/1.0/direct?q=Delhi&limit=1&appid=${APIKEY}`;

  const [weatherData,setweatherData] = useState(null);
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
        console.log(lat);
        console.log(lon);
        console.log(country);

        // Construct the weather API URL
        const BaseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;
        const weatherResponse = await fetch(BaseUrl);
        if (!weatherResponse.ok) {
          throw new Error("Error while getting data by API");
        }
        const weatherData = await weatherResponse.json();
        setweatherData(weatherData)
        console.log(weatherData);
      }
    }catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
    getData();
  },[])

  return (
    <>

      <main>
      <div className="section">
        <h2>WeatherWave</h2>
        <button>Get Started</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {weatherData && (
          <div>
            <h3>Weather Data</h3>
            <pre>{JSON.stringify(weatherData, null, 2)}</pre>
          </div>
        )}
      </div>
    </main>
    </>
  );
}

export default App; 
