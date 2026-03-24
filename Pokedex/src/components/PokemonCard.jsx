function PokemonCard({ id, name, type, exp, isWinner }) {
    const paddedId = String(id).padStart(3, "0");
    const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

    const bgColor = typeColors[type] || "#F5F5F5";

    return (
        <div
            className={`card ${isWinner ? "winner-card" : ""}`}
            style={{ backgroundColor: bgColor }}
        >
            <img src={img} alt={name} />
            <div className="card-info">
                <h3>{name}</h3>
                <p>Type: {type}</p>
                <p>EXP: {exp}</p>
            </div>
        </div>
    );
}

const typeColors = {
    fire: "#FDDFDF",
    water: "#DEF3FD",
    electric: "#FCF7DE",
    grass: "#DEFDE0",
    ice: "#D0F0FD",
    fighting: "#E6E0D4",
    poison: "#98D7A5",
    ground: "#F4E7DA",
    flying: "#F5F5F5",
    psychic: "#EAEDA1",
    bug: "#F8D5A3",
    rock: "#D5D5D4",
    ghost: "#705898",
    dragon: "#97B3E6",
    dark: "#705848",
    steel: "#B7B7CE",
    fairy: "#FCEAFF",
    normal: "#F5F5F5"
};

export default PokemonCard;