import { useState } from "react";

function App() {
  const [cidade, setCidade] = useState("");
  const [dadosClima, setDadosClima] = useState(null);

  async function buscarCidade() {
    const apiKey = "3b7386a79f55113340ea5739f7bcd352";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=${apiKey}&units=metric&lang=pt_br`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log(dados);

    setDadosClima(dados);
  }

  return (
    <div>
      <h1>🌤️ Dashboard Climático</h1>

      <input
        type="text"
        placeholder="Digite uma cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />

      <button onClick={buscarCidade}>Buscar</button>

      {dadosClima && dadosClima.main && (
        <div>
          <h2>{dadosClima.name}</h2>
          <p>Temperatura: {dadosClima.main.temp}°C</p>
          <p>Clima: {dadosClima.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
