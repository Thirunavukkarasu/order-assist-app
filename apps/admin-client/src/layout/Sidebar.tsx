import { Link } from "react-router-dom";
import {
  FaChartLine, FaBarcode, FaShoppingCart,
  FaUsers, FaChartBar, FaCog
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [{
    title: 'Dashboard',
    icon: <FaChartLine size={20} />,
    href: '/dashboard'
  }, {
    title: 'Customers',
    icon: <FaUsers size={20} />,
    href: '/customers'
  }, {
    title: 'Orders',
    icon: <FaShoppingCart size={20} />,
    href: '/orders'
  }, {
    title: 'Products',
    icon: <FaBarcode size={20} />,
    href: '/products'
  }, {
    title: 'Reports',
    icon: <FaChartBar size={20} />,
    href: '/reports'
  }, {
    title: 'Settings',
    icon: <FaCog size={20} />,
    href: '/settings'
  }];

  return (
    <aside
      className="w-62 px-10 border-r bg-sky-700 text-white border-r-gray-300"
    >
      <div className="flex flex-col space-y-10">
        <img src="oa-logo-3.png" className="w-40 h-10 mt-10" alt="Logo" />
        <ul className="flex flex-col space-y-10">
          {menuItems.map((menuItem, idx) => (
            <li key={idx} className="group">
              <Link
                aria-current="page"
                to={menuItem.href}
                className="flex space-x-2 items-center group-hover:text-sky-500"
              >
                <span
                  className="w-2 h-8 bg-sky-500 absolute left-0 rounded scale-y-0 group-hover:scale-y-100 transition-transform ease-in-out duration-300"
                >
                </span>
                {menuItem.icon}
                <span>{menuItem.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
