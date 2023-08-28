import '../App';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Registrator App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            {/* <a className="nav-link" href="#">List Employees </a> */}
            <Link className="nav-link" to="/register">Register Employees</Link>
            {/* <a className="nav-link" href="#">Update Employees</a>
            <a className="nav-link" href="#">Delete Employees</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
