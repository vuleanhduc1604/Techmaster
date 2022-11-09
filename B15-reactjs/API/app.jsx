const Todocard = ({title, completed, id, userId}) => {
    return (
        <div className="todocard">
            <p className="id">{id}</p>
            <p className="userId">{userId}</p>
            <p className="title">{title}</p>
        </div>
    )
    }
const TodoType = PropTypes.exact({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
})
Todocard.PropTypes = TodoType
const TodoList = ({todos}) => {
    const list = todos.map(todo => <Todocard title={todo.title} completed = {todo.completed} />)
    return(
        <div className="todolist">
            {list}
        </div>
    )
}
TodoList.PropTypes = PropTypes.arrayOf(TodoType)
const App = () => {
    const [todos, setTodos] = React.useState([])
    React.useEffect(() => {
        const controller = new AbortController();
        fetch("https://jsonplaceholder.typicode.com/todos", {
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then((data) => {
                setTodos(data)
            })
        return() => {
            controller.abort()

        }
    },[])
    console.log(todos)
    return(<TodoList todos = {todos} />)
}

const root = ReactDOM.createRoot(document.querySelector('#app'))
root.render(<App />)