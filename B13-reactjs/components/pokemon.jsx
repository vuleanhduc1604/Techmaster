function Pokemon({pokemon}) {
    return (
        <div className="card-wrapper">
            <p className="card-name">{pokemon.name}</p>
            <img src={pokemon.image} alt="image"></img>
            <p className="type">Type: {pokemon.type}</p>
        </div>
    )
}
const PokemonType = PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
})
Pokemon.propTypes = {
    pokemon: PokemonType
}