import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav
      className=""
    >
      <div className="">
        <ul className="">
          <li>
            <Link className="" aria-current="page" to="dashboard">
              <i className=""></i> Dashboard
            </Link>
          </li>
          <li>
            <Link className="" to="orders">
              <i className=""></i>
              Orders
            </Link>
          </li>
          <li>
            <Link className="" to="products">
              <i className=""></i>
              Products
            </Link>
          </li>
          <li>
            <Link className="" to="customers">
              <i className=""></i>
              Customers
            </Link>
          </li>
          <li>
            <Link className="" to="reports">
              <i className=""></i>
              Reports
            </Link>
          </li>
          <li>
            <Link className="" to="settings">
              <i className=""></i>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
