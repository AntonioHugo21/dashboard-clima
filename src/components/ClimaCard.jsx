import "./ClimaCard.css";

function ClimaCard({dados}) {
    if (!dados) return null;

    return (
        <div className="card">
            <h2>{dados.name}</h2>

            <img
                src={`https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`}
                alt="Ícone do clima"
            />

            <p>🌡️ {dados.main.temp}°C</p>
            <p>☁️ {dados.weather[0].description}</p>
            <p>🥵 Sensação térmica: {dadosClima.main.feels_like}°C</p>
            <p>💨 Vento: {(dadosClima.wind.speed * 3.6).toFixed(1)} km/h</p>
        </div>
    );
}

export default ClimaCard;