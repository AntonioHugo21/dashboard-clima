import {useState} from "react";

function App() {
  const [cidade, setCidade] = useState("");
  const [cidadeBuscada, setCidadeBuscada] = useState("");

  function buscarCidade() {
    setCidadeBuscada(cidade);
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
        <p>Cidade buscada: {cidadeBuscada}</p>
    </div>
  )
}

export default App