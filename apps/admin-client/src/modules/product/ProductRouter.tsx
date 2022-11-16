import { Routes, Route } from "react-router-dom";

import ProductList from "./ProductList";

function ProductRouter() {
  return (
    <Routes>
      <Route index element={<ProductList />} />
    </Routes>
  );
}

export default ProductRouter;
