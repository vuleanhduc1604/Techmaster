function App() {
    return (
        <div>
            <Hello name="React"/>
            <Hello name="st"/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(App())