import { FaCartPlus, FaShoppingBag, FaLuggageCart, FaUsers, FaGraduationCap, FaLink, FaUserAlt, FaUserFriends, FaUserLock } from "react-icons/fa";
import PageTitle from "ui/PageTitle";
import CardLayout from "ui/CardLayout";

function SettingsLandingPage() {
  const cards = [{
    title: 'Application Users',
    icon: <FaUsers size={32} />,
    href: 'application-users'
  }, {
    title: 'Application Roles',
    icon: <FaUserLock size={32} />,
    href: 'application-roles'
  }, {
    title: 'Integrations',
    icon: <FaLink size={32} />,
    href: 'integrations'
  }];
  return (
    <div>
      <CardLayout cards={cards} />
    </div>
  );
}

export default SettingsLandingPage;
