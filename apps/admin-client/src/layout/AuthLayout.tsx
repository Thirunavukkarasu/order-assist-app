import { Routes, Route } from "react-router-dom";

import Sidebar from "layout/Sidebar";
import TopNavbar from "layout/TopNavbar";
import CustomerRouter from "modules/customer/CustomerRouter";
import DashboardRouter from "modules/dashboard/DashboardRouter";
import OrderRouter from "modules/order/OrderRouter";
import ProductRouter from "modules/product/ProductRouter";
import ReportRouter from "modules/report/ReportRouter";
import SettingsRouter from "modules/settings/SettingsRouter";

export default function AuthLayout(){
    return (
        <>
        <Sidebar />
        <main className="flex flex-col flex-1">
          <TopNavbar/>
          <div className="py-6 px-6 flex-1">
            <Routes>
              <Route path="dashboard" element={<DashboardRouter />} />
              <Route path="customers" element={<CustomerRouter />} />
              <Route path="orders/*" element={<OrderRouter />} />
              <Route path="products" element={<ProductRouter />} />
              <Route path="reports" element={<ReportRouter />} />
              <Route path="settings/*" element={<SettingsRouter />} />
            </Routes>
          </div>
        </main>
      </>
    )
}