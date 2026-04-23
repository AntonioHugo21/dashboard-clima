import { useState } from "react";
import "./App.css";
import ClimaCard from "./components/ClimaCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [cidade, setCidade] = useState("");
  const [dadosClima, setDadosClima] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [historico, setHistorico] = useState([]);

  async function buscarCidade() {
    const apiKey = "3b7386a79f55113340ea5739f7bcd352";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=${apiKey}&units=metric&lang=pt_br`;

    setLoading(true);
    setErro("");

    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();

      if (dados.cod == "404") {
        setErro("Cidade não encontrada ❌");
        setDadosClima(null);
      } else {
        setDadosClima(dados);
      }
    } catch (error) {
      setErro("Erro ao buscar dados ⚠️");
    }

    setLoading(false);

    setHistorico((prev) => {
      const listaFiltrada = prev.filter((item) => item !== cidade);
      return [cidade, ...listaFiltrada].slice(0, 5);
    });
  }

  return (
    <div className="container">
      <h1>🌤️ Dashboard Climático</h1>

      <SearchBar
        cidade={cidade}
        setCidade={setCidade}
        buscarCidade={buscarCidade}
        loading={loading}
      />

      <div className="historico">
        {historico.map((item, index) =>(
          <button key={index} onClick={() => {
            setCidade(item);
            buscarCidade();
          }}>
            {item}
          </button>
        ))}
      </div>

      {loading && <p>Carregando... ⏳</p>}
      {erro && <p>{erro}</p>}

      <ClimaCard dados={dadosClima} />
    </div>
  );
}

export default App;
