import { Routes, Route, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {startCase} from 'lodash';

import Sidebar from "./layout/Sidebar";

import CustomerRouter from "./modules/customer/CustomerRouter";
import DashboardRouter from "./modules/dashboard/DashboardRouter";
import OrderRouter from "./modules/order/OrderRouter";
import ProductRouter from "./modules/product/ProductRouter";
import ReportRouter from "./modules/report/ReportRouter";
import SettingsRouter from "./modules/settings/SettingsRouter";

function App() {
  const location = useLocation();
  const heading = startCase(location?.pathname);
  const { isLoading, error } = useAuth0();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {isAuthenticated && (
        <>
          <Sidebar />
          <main className="flex flex-col flex-1">
            <div className="h-16 bg-gray-50 border-b flex flex-row justify-between py-5 px-5">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{heading}</h2>
              </div>
              <div className="flex flex-row items-center space-x-4">
                  <h4>{user?.name}</h4>
                  <img
                      src={user?.picture}
                      alt="Profile"
                      className="w-8 h-8 rounded-2xl"
                    />
                <button onClick={() => logoutWithRedirect()}>Logout</button>
              </div>
            </div>
            <div className="py-6 px-6 flex-1">
              <Routes>
                <Route path="dashboard" element={<DashboardRouter />} />
                <Route path="customers" element={<CustomerRouter />} />
                <Route path="orders/*" element={<OrderRouter />} />
                <Route path="products" element={<ProductRouter />} />
                <Route path="reports" element={<ReportRouter />} />
                <Route path="settings" element={<SettingsRouter />} />
              </Routes>
            </div>
          </main>
        </>
      )}
      {!isAuthenticated && (
        <div className="bg-gray-50 flex items-center justify-center">
          <div className="h-96 bg-gray-700 w-1/2 text-white px-10 py-10 space-y-5 rounded-lg">
            <div className="space-y-4">
            <h1 className="text-3xl">Explore Order Assist App</h1>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nulla nostrum corporis ex reiciendis natus. Doloribus natus numquam incidunt, animi rerum recusandae. Exercitationem ipsam, enim odio totam consequatur mollitia cupiditate.
            Iste, animi similique. Veniam rerum officia quidem earum cumque soluta quibusdam, corporis, id voluptatibus voluptatum expedita eius explicabo quas tempora beatae veritatis dolore tenetur animi. Ratione ad expedita eligendi suscipit.
            Provident rem minima hic omnis ducimus architecto nihil reprehenderit magnam repellendus, aliquid earum molestias incidunt quibusdam ut excepturi, veritatis nisi impedit! Iure iusto recusandae id voluptatem harum repellat earum rerum.
            </p>
            </div>
            <div onClick={() => loginWithRedirect()} className="bg-sky-400 px-10 py-5 w-32 rounded-lg hover:bg-sky-700 text-md">
              Login
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
