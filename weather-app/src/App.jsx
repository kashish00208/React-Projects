import { useEffect, useState } from "react";
import Weather from "./components/weather";
import Img from "./images/image.jpeg";
function App() {
  return (
    <>
      <main className="bg-custom-gradient  w-screen h-screen">
        <div className="w-4/5">
          <div className="bg-custom-dark">
            <div className="section-1">
              {/* <img src={Img} className="rounded-3xl" alt="Image" /> */}
            </div>
            <div className="section-2">
              <h1>WeatherWave</h1>
              <p>Weather App</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
