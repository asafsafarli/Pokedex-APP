import PokemonCard from "./PokemonCard";

function PokemonTeam({ team, totalExp, teamIsWinner }) {
    return (
        <div>
            <h2 className={teamIsWinner ? "winner" : "loser"}>
                {teamIsWinner ? "Winner 🏆" : "Loser ❌"}
            </h2>
            <h3>Total EXP: {totalExp}</h3>

            <div className="team">
                {team.map((p) => (
                    <PokemonCard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                        isWinner={teamIsWinner}
                    />
                ))}
            </div>
        </div>
    );
}

export default PokemonTeam;
