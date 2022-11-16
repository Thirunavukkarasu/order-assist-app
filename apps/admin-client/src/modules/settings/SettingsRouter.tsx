import { Route, Routes } from "react-router-dom";
import SettingsLandingPage from "./SettingsLandingPage";

function SettingsRouter() {
  return (
    <Routes>
      <Route index element={<SettingsLandingPage />} />
    </Routes>
  )
}

export default SettingsRouter;
