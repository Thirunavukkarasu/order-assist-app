import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

import CustomerRouter from "./modules/customer/CustomerRouter";
import DashboardRouter from "./modules/dashboard/DashboardRouter";
import OrderRouter from "./modules/order/OrderRouter";
import ProductRouter from "./modules/product/ProductRouter";
import ReportRouter from "./modules/report/ReportRouter";
import SettingsRouter from "./modules/settings/SettingsRouter";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container-fluid" style={{ height: "90vh" }}>
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="dashboard" element={<DashboardRouter />} />
              <Route path="customers" element={<CustomerRouter />} />
              <Route path="orders/*" element={<OrderRouter />} />
              <Route path="products" element={<ProductRouter />} />
              <Route path="reports" element={<ReportRouter />} />
              <Route path="settings" element={<SettingsRouter />} />
            </Routes>
          </main>
        </div>
      </div>
      {/*<Footer />*/}
    </div>
  );
}

export default App;
