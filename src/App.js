import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  // const API_KEY = "YOUR_OPENWEATHER_API_KEY"; // Get it from https://openweathermap.org/api
  useEffect(() => {
    console.log(weather);
  }, [weather]);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=34bf085bab2445f5a4d83254241210&q=${city}&aqi=no`
      );
      setWeather(response.data);
    } catch (error) {
      alert("City not found!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div>
          <h3>{weather?.location?.name}, {weather?.location?.country}</h3>
          <p>{weather?.current?.temp_c}°C</p>
          <p>{weather?.current?.condition?.text}</p>
        </div>
      )}
    </div>
  );
}

export default App;
