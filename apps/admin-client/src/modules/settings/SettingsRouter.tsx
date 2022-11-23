import { Route, Routes } from "react-router-dom";

import SettingsLandingPage from "./SettingsLandingPage";
import RoleList from "./roles/RoleList";
import UserList from "./users/UserList";
import PermissionList from "./permissions/PermissionList";

function SettingsRouter() {
  return (
    <Routes>
      <Route index element={<SettingsLandingPage />} />
      <Route path="users" element={<UserList />} />
      <Route path="roles" element={<RoleList />} />
      <Route path="permissions" element={<PermissionList />} />
    </Routes>
  )
}

export default SettingsRouter;
