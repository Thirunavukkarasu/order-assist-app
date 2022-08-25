import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <NavItem>
            <Link className="nav-link" aria-current="page" to="dashboard">
              <i className="bi bi-speedometer2"></i> Dashboard
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="orders">
              <i className="bi bi-cart"></i>
              Orders
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="products">
              <i className="bi bi-upc-scan"></i>
              Products
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="customers">
              <i className="bi bi-people"></i>
              Customers
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="reports">
              <i className="bi bi-file-bar-graph"></i>
              Reports
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="settings">
              <i className="bi bi-gear"></i>
              Settings
            </Link>
          </NavItem>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
