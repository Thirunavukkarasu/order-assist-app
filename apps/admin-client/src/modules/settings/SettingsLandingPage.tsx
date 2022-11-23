import { FaUsers, FaUserLock, FaUniversalAccess } from "react-icons/fa";

import CardLayout from "ui/CardLayout";

function SettingsLandingPage() {
  const cards = [{
    title: 'Users',
    icon: <FaUsers size={32} />,
    href: 'users'
  }, {
    title: 'Roles',
    icon: <FaUserLock size={32} />,
    href: 'roles'
  }, {
    title: 'Permissions',
    icon: <FaUniversalAccess size={32} />,
    href: 'permissions'
  }];
  
  return (
    <div>
      <CardLayout cards={cards} />
    </div>
  );
}

export default SettingsLandingPage;
