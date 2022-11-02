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