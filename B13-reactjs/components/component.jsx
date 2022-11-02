function Hello({name}) {
    return (
        <div>
            <h1>Hello {name === "React" ? "ReactJS" : name = "sth"}</h1>
            {name === "React" && <button>Like</button>}
        </div>
    )
}
Hello.propTypes = {
    name: PropTypes.string.isRequired,
}
Hello.defaultProps = {
    name: "User"
}

// Conditional Rendering
// ? thường được sử dụng để trả về 1 trong 2 giá trị khác nhau, thường được sử dụng với thuộc tính, hoặc là 2 đoạn JSX khác nhau
// && thường được sử dụng để hiển thị 1 đoạn JSX tùy thuộc vào điều

// Render multi-component