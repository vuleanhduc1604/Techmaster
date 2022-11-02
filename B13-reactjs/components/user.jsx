function User({user}) {
    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <button>Logout</button>
                {user.isAdmin && <button>Truy cập trang Admin</button>}
            </div>
        )
    } else {
        return (
            <div>
                <button>Đăng nhập</button>
                <button>Đăng kí</button>
            </div>
        )

    }

}
User.propTypes = {
    user: PropTypes.exact({
        name: PropTypes.string,
        isAdmin: PropTypes.bool,
    })
}