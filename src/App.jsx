import { useState } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");
  const [dataWeather, setDataWeather] = useState(null);
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "0fd710cbd96e97d5b1e81131b71e7de0";

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length > 0) fetchWeather();
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`);
      const data = await response.json();
      setDataWeather(data);
      setCity("");
    } catch (err) {
      console.error("The following error occurred: ", err);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center p-4">
        WeatherApp <i className="fa-solid fa-cloud-moon"></i>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-3"
      >
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          className="border-2 border-white rounded-xl p-2"
        />
        <button className="flex justify-center items-center p-3 border-2 border-white rounded-xl ">
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
        </button>
      </form>

      {dataWeather && <Weather dataWeather={dataWeather} />}
    </>
  );
}

export default App;
