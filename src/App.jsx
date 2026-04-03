import {useState} from "react";

function App() {
  const [cidade, setCidade] = useState("");

  return (
    <div>
      <h1>🌤️ Dashboard Climático</h1>

      <input
       type="text"
       placeholder="Digite uma cidade"
       value={cidade}
       onChange={(e) => setCidade(e.target.value)}
        />

        <p>Cidade digitada: {cidade}</p>

        <button>Buscar</button>
    </div>
  )
}

export default App