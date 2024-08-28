import { useEffect, useState } from "react";
import Weather from "./components/weather";
import Img from "./images/image.jpeg";
function App() {
  return (
    <>
      <main className="bg-custom-gradient  w-screen h-screen">
        <div className="w-3/5 pl-40 pt-12">
          <div className="bg-custom-dark py-8 rounded-3xl">
            <div className="section-1 w-full h-full pl-5 pr-5">
              <img src={Img} className="rounded-3xl" alt="Image" />
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
