function PokemonList({pokemons}) {
    const list = pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemons.id} />)
    return (
        <div className="pokemon-list" key={pokemons.id}>
            {list}
        </div>
    )
}
PokemonList.propTypes = {
    pokemons: PropTypes.arrayOf(PokemonType)
}