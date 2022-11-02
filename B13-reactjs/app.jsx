function App() {
    const user = {
        name:"React",
        isAdmin: true,
    }
    const names = ["Ba", "Sơn", "Bon"]
    
    return (
        <div className="container">
            {names.map((name) => (<Hello name={name} />))}
            <User user={user} />
        </div>
    )
}
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(App())
function PokemonApp() {
    const info = [
        {
          id: 1,
          name: "Charmander",
          type: "fire",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
          id: 2,
          name: "Squirtle",
          type: "water",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
          id: 3,
          name: "Butterfree",
          type: "flying",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        },
        {
          id: 4,
          name: "Rattata",
          type: "normal",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
        },
        {
          id: 5,
          name: "Metapod",
          type: "bug",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
        }
    ]
    return <PokemonList pokemons={info} />
}
const root2 = ReactDOM.createRoot(document.querySelector('#app2'));
root2.render(<PokemonApp />)