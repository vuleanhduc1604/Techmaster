const root = ReactDOM.createRoot(document.querySelector('#app'));
function Avatar({src, alt}) {
    return (
        <div className="avatar-wrapper">
            <img src={src} alt={alt} className="avatar" />
        </div>
    )
}
Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
}
Avatar.defaultProps = {
    src: "avatar-test.jpeg",
    alt: "test"
}
export default Avatar
function App() {
    return (
        <div>
            <Avatar />
        </div>
    )
}

root.render(<App />)