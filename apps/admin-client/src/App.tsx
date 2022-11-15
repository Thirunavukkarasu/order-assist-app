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
    <div>
      <Header />
      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
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
  );
}

export default App;
