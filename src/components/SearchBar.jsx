function SearchBar({cidade, setCidade, buscarCidade, loading}) {
    return (
        <div>
            <input 
                type="text"
                placeholder="Digite a cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
            />

            <button onClick={buscarCidade} disabled={loading}>
                {loading ? "Buscando" : "Buscar"}
            </button>
        </div>
    );
}

export default SearchBar;