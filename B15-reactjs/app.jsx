

const root = ReactDOM.createRoot(document.querySelector('#app'));
const Counter = ({index, onIncrement, onDecrement}) => {
    return (
        <div className="counter">
            <button onClick={onIncrement}>+</button>
            {index}
            <button onClick={onDecrement}>-</button>
        </div>
    )
}
const Square = ({value}) => {
    const style = {
        width: 100 + value * 10,
        height: 100 + value * 10,
    }
    return(
        <div className="square" style={style}></div>
    )
}
const App = () => {
    const [index, setIndex] = React.useState(0);
    return (
        <div className="container">
            <Counter 
                // Two way data binding
                // Truyền trạng thái từ component cha
                index={index} 
                // Đồng thười truyền xuống hàm để cho phép component con cập nhật trạng thái
                onIncrement={() => setIndex(index + 1)} 
                onDecrement={() => setIndex(index - 1)}
            />
            <Square value={index} />
        </div>
    )
}
root.render(<App />)

const App2 = () => {
    React.useEffect(() => {console.log("App mounted")}, []);

    console.log("Render App")
    return (
        <div className="container"></div>
    )
}
const root2 = ReactDOM.createRoot(document.querySelector('#app2'))
root2.render(<App2 />)
const App3 = () => {
    const [count, setCount] = React.useState(0);
    const [e, setE] = React.useState(0);
    React.useEffect(() => {
        console.log("App mounted");

        return () => { // Hơi khác với componentWillUnmount
            console.log("Before re-render")
        }
    }, [e]) // Chạy với mỗi lần trạng thái e thay đổi
    console.log("render App");
    return (
        <div className="container">
            <button onClick={() => setCount(count + 1)}>{count}</button>

            <button onClick={() => setE(e + 1)}>{e}</button>
        </div>
    )
}
const root3 = ReactDOM.createRoot(document.querySelector('#app3'))
root3.render(<App3 />)