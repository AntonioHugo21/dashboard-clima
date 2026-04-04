import { useState } from "react";

function App() {
  const [cidade, setCidade] = useState("");
  const [dadosClima, setDadosClima] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function buscarCidade() {
    const apiKey = "3b7386a79f55113340ea5739f7bcd352";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=${apiKey}&units=metric&lang=pt_br`;

    setLoading(true);
    setErro("");

    try{
      const resposta = await fetch(url);
      const dados = await resposta.json();

      if (dados.cod == "404") {
        setErro("Cidade não encontrada ❌");
        setDadosClima(null);
      } else {
        setDadosClima(dados);
      }
    } catch (error) {
      setErro("Erro ao buscar dados ⚠️")
    }

    setLoading(false);
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

      <button onClick={buscarCidade} disabled={loading}>
        {loading? "Buscando...":"Buscar"}
      </button>

      {dadosClima && dadosClima.main && (
        <div className="card">
          <h2>{dadosClima.name}</h2>

          <img 
            src={`https://openweathermap.org/img/wn/${dadosClima.weather[0].icon}@2x.png`}
            alt="Ícone do clima" 
          />

          <p>🌡️ {dadosClima.main.temp}°C</p>
          <p>☁️ {dadosClima.weather[0].description}</p>
          <p>🥵 Sensação térmica: {dadosClima.main.feels_like}°C</p>
          <p>💨 Vento: {(dadosClima.wind.speed * 3.6).toFixed(1)} km/h</p>
        </div>
      )}

      {loading && <p>Carregando... ⏳</p>}
      {erro && <p>{erro}</p>}

      
    </div>
  );
}

export default App;
