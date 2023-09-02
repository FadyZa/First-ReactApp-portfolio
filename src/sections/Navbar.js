export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a
          className="navbar-brand text-primary fw-bold text-capitalize"
          href="#a"
        >
          start bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link fw-medium text-capitalize "
                aria-current="page"
                href="#a"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium text-capitalize" href="#resume">
                resume
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-medium text-capitalize" href="#a">
                projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium text-capitalize" href="#contact">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
