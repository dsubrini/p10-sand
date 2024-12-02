import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const token = useSelector((store) => store.auth.token);
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        LOGO
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {!token && (
          <NavLink className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
        {token && (
          <NavLink className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {token}
          </NavLink>
        )}
      </div>
    </nav>
  );
}
