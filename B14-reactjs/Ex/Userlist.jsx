const UserList = ({ users }) => {
    const list = users.map((user, i) => <User user={user} key={i} />);
    return <div className="user-list">{list}</div>;
  };
  
  UserList.propTypes = {
    users: PropTypes.arrayOf(UserType),
  };