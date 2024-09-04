import { useEffect, useState } from "react";
import Weather from "./components/weather";
import Img from "./images/image.jpeg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function Homepage() {
  const navigae = useNavigate();
  const handle = () => {
    navigae("/weather");
  };
  return (
    <main className="bg-custom-gradient w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl p-4">
        <div className="bg-custom-dark py-6 px-4 rounded-2xl flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img src={Img} className="w-full h-auto rounded-3xl" alt="Image" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left p-4 md:p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              WeatherWave
            </h2>
            <p className="text-sm md:text-base text-white mb-4">
              A weather App
            </p>
            <button
              onClick={handle}
              className="w-full md:w-28 text-sm bg-blue-400 text-white rounded-3xl px-4 py-2 "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
