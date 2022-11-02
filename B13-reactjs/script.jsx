const name = "React";
const root = ReactDOM.createRoot(document.querySelector('#app'));
function createApp() {
    const now = new Date()
    return (
    <div className="wrapper">
        <h1 className="header">{name}</h1>
        <p>Time: {now.toLocaleTimeString()}</p>
        <form className="form">
            <span>Username</span>
            <input type="text" placeholder="Username"/>
            <button>Submit</button>
        </form>
    </div>
    )
    
}
setInterval(() => {
    root.render(createApp())
},1000)
function App() {
    const data = {
        nickname: "React",
        age: 10,
        role: "ADMIN"
    }
    function Hello(props) {
        return (<h1>{props.nickname}</h1>)
    }

    Hello.propTypes = {
        nickname: PropTypes.string.isRequired,
        children: PropTypes.node,
    }

    Hello.defaultProps = {
        nickname: "ReactJS"
    }
    function Time() {
        const now = new Date();
        return <p>{now.toLocaleTimeString()}</p>
    }
    return (
    <div>
        <Hello />
        <Time />        
    </div>
    )
}
const root2 = ReactDOM.createRoot(document.querySelector('#app2'));
root2.render(<App />);
console.log(<App />)