import { useState } from "react";
import pokemonData from "./data";
import PokemonTeam from "./components/PokemonTeam";
import "./App.css";

function App() {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  function startGame() {
    let shuffled = [...pokemonData].sort(() => Math.random() - 0.5);

    let first = shuffled.slice(0, 4);
    let second = shuffled.slice(4);

    setTeam1(first);
    setTeam2(second);
  }

  const exp1 = team1.reduce((acc, p) => acc + p.base_experience, 0);
  const exp2 = team2.reduce((acc, p) => acc + p.base_experience, 0);

  const team1Winner = exp1 > exp2;
  const team2Winner = exp2 > exp1;
  return (
    <div>
      <h1>Pokemon Battle Game</h1>

      <button onClick={startGame}>
        Start / Restart Game
      </button>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <PokemonTeam team={team1} totalExp={exp1} teamIsWinner={team1Winner} />
        <PokemonTeam team={team2} totalExp={exp2} teamIsWinner={team2Winner} />      </div>
    </div>
  );
}

export default App;