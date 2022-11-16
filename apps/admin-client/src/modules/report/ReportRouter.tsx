import { Route, Routes } from "react-router-dom";

import ReportLandingPage from "./ReportLandingPage";

function ReportRouter() {
  return (
    <Routes>
      <Route index element={<ReportLandingPage />} />
    </Routes>
  )
}

export default ReportRouter;
