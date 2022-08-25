import { Routes, Route } from "react-router-dom";
import OrderLandingPage from "./OrderLandingPage";

import PackageList from "./package/PackageList";
import SalesOrderList from "./salesorder/SalesOrderList";
import ShipmentList from "./shipment/ShipmentList";

function OrderRouter() {
  return (
    <Routes>
      <Route index element={<OrderLandingPage />} />
      <Route path="sales-orders" element={<SalesOrderList />} />
      <Route path="packages" element={<PackageList />} />
      <Route path="shipments" element={<ShipmentList />} />
    </Routes>
  );
}

export default OrderRouter;
