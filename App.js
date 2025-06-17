import React, { useState } from 'react';
import './App.css';

function App() {
  const [activated, setActivated] = useState(false);
  const [input, setInput] = useState("");
  const code = "seja bem-vindo irmão";

  const handleCode = () => {
    if (input.trim().toLowerCase() === code.toLowerCase()) {
      setActivated(true);
    }
  };

  return (
    <div className="App">
      <h1>🎧 Pedroso Drop</h1>
      <p className="urban">Estilo de vida nas ruas - com inteligência ⚡</p>
      {!activated ? (
        <div className="card">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Digite o código de ativação..." />
          <button onClick={handleCode}>Ativar Eduardo</button>
        </div>
      ) : (
        <div className="panel">
          <h2>Eduardo Ativado</h2>
          <p>Loja conectada. Vamos dominar o movimento. 🔥</p>
          <div className="grid">
            <button>📦 Fazer Encomenda</button>
            <button>📊 Ver Relatórios</button>
            <button>⚙️ Configurações</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;