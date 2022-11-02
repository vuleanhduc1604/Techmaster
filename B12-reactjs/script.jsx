/* const h1 = React.createElement("h1", {
    id:"sth",
    onClick: () => {
        console.log("Hello")
    },
    children: ["React", "jijij"]
})
console.log(h1)

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(h1)

const img = React.createElement("img", {
    src:"avatar-test.jpeg",
    alt: "sthsth"
})
const p = React.createElement("p", {
    id:"p",
    children: "sth sth"
})
const h2 = React.createElement("h2", {
    id:"h2",
    children: "h2"
})
const a = React.createElement("a", {
    id:"a",
    children: "sth"
})
const wrapper = React.createElement("div", {
    id:"wrapper",
    children: [
        h1,
        h2,
        p,
        a,
        img,
        React.createElement("form", {
            id:"form",
            children: [
                React.createElement("")
            ]
        })
    ]
}) 
const root3 = ReactDOM.createRoot(document.querySelector('#app3'));
root3.render(h2)
const root2 = ReactDOM.createRoot(document.querySelector('#app2'))
root2.render(p)
const root4 = ReactDOM.createRoot(document.querySelector('#app4'))
root4.render(img) */
const name = "React";
const isTrue = true;
const root = ReactDOM.createRoot(document.querySelector('#app'));
function createApp() {
    const now = new Date()
    return (
    <div className="wrapper">
        <h1 className="header">{name}</h1>
        <img className="img" src='avatar-test.jpeg'/>
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

function Sth({nickname, age, role}) {
    return (<h1>Hello {nickname}, {age}, {role}</h1>)
}



function Time() {
    const now = new Date();
    return <p>{now.toLocaleTimeString()}</p>
}


function App() {
    const data = {
        nickname: "React",
        age: 10,
        role: "ADMIN"
    }
    return <div>
        <Hello/> 
        <Name />
        <Time />
    </div>
}
const root2 = ReactDOM.createRoot(document.querySelector('#app2'));
root2.render(<App />);
console.log(<App />)