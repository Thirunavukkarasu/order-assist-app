import { Route, Routes } from "react-router-dom";

import DashboardLandingPage from "./DashboardLandingPage";

function DashboardRouter() {
  return (
    <Routes>
      <Route index element={<DashboardLandingPage />} />
    </Routes>
  )
}

export default DashboardRouter;
