import React, { useEffect, useState } from 'react';
import '../styles/MyCity.css';


export default function MyCity() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = '0993f707d0b214c8d6dd4d774398945b'; 
  const CITY = 'Kyiv';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=ua`)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Помилка завантаження:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="city-container" style={{ padding: '20px' }}>
      <h1>Моє місто — {CITY}</h1>

      <section>
        <h2>Опис міста</h2>
        <p>
          Київ — столиця України, культурний, освітній та історичний центр. Місто з багатою історією, архітектурою
          і сучасним ритмом життя. Тут мені подобається проживати, але в майбутньому хочу переїхати в іншу країну. 
        </p>
      </section>

      <section>
        <h2>Поточна погода</h2>
        {loading ? (
          <p>Завантаження...</p>
        ) : weather ? (
          <ul>
            <li>Місто: {weather.name}</li>
            <li>Країна: {weather.sys.country}</li>
            <li>Температура: {weather.main.temp} °C</li>
            <li>Опис: {weather.weather[0].description}</li>
            <li>Координати: [{weather.coord.lat}, {weather.coord.lon}]</li>
          </ul>
        ) : (
          <p>Не вдалося отримати дані про погоду.</p>
        )}
      </section>
    </div>
  );
}
