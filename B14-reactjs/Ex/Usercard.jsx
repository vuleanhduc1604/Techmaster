const User = ({ user }) => {
    return (
      <div className="user">
        <img src={user.avatar} alt={user.fullname} />
        <p>{user.name}</p>
        <p>{user.job}</p>
        <p>{user.content}</p>
      </div>
    );
  };
  
  const UserType = PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
    job: PropTypes.string,
  });
  
  User.propTypes = {
    pokemon: UserType,
  };