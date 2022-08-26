import { Routes, Route } from "react-router-dom";
import CustomerList from "./CustomerList";

function CustomerRouter() {
  return (
    <Routes>
      <Route index element={<CustomerList />} />
    </Routes>
  );
}

export default CustomerRouter;
