
const HandlingEvent = () => {
    const handleClick = (e, name) => {
        console.log(name)
        console.log("Clicked")
    }
    return (
        <button onClick={(e) => handleClick(e, "Ba")}>Click</button>
    )
}
const CreateForm = () => {
    const formChange = () => {
        console.log()
    }
    const formSubmit = (e) => {
        e.preventDefault()
        console.log(document.querySelector('input').value)
        console.log(document.querySelector('select').value)
    }
    return (
        <form action="" onSubmit={formSubmit}>
            <input type="text" name="username" />
            <select name="gender" id="">
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
            <button>Submit</button>
        </form>
    )
}
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(HandlingEvent())
const root2 = ReactDOM.createRoot(document.querySelector('#app2'));
root2.render(CreateForm())

class State extends React.Component {
    state = {
        value: 1,
    }
    increment =() => {
        this.setState({value: this.state.value + 1})
    }
    decrement = () => {
        this.setState({value: this.state.value - 1})
    }
    render() {
        return <div>
            <button onClick = {this.increment}>Increment</button>
            <p>{this.state.value}</p>
            <button onClick = {this.decrement}>Decrement</button>

            </div>
    }
}

const root3 = ReactDOM.createRoot(document.querySelector('#app3'));
root3.render(<State />)

const App = () => {
    const [count, setCount] = React.useState(0);
    const demoRef = React.useRef(0);
    const changeDemoRef = () => {
        demoRef.current = Math.floor(Math.random() * 100);
        console.log(demoRef)
    }
    const increment = () => {
        setCount(count + 1)
    };
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={changeDemoRef}>Change demo ref</button>
        </div>
    )
}
const root4 = ReactDOM.createRoot(document.querySelector('#app4'));
root4.render(<App />)

// Gọi Hook
// Khai báo các render
// Câu lệnh để tính toán
// Render

const Timer = () => {
    const [count, setCount] = React.useState(0)
    const timer = React.useRef(0);
    const start = () => {
        if (!timer.current) {
            timer.current = setInterval(() => {
                setCount(count + 1)
            }, 1000);
        }
    }
    const stop = () => {
        if (timer.current) {clearInterval(timer, current)};
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}
const root5 = ReactDOM.createRoot(document.querySelector('#app5'));
root5.render(<Timer />)

const root6 = ReactDOM.createRoot(document.querySelector('#app6'));
const Color = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1)
    };
    const decrement = () => {
        setCount(count - 1)
    }
    const colorValue = (style) => {
        if (count > 0) {
            style = {color : 'blue'}
        } else if(count < 0) {
            style ={color: "red"}
        } else {
            style={color: "#333333"}
        }

      return style
    }
    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <p style={colorValue()}>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}
root6.render(<Color />)
