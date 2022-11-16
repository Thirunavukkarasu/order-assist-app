import { FaCartPlus, FaShoppingBag, FaLuggageCart } from "react-icons/fa";
import PageTitle from "ui/PageTitle";
import CardLayout from "ui/CardLayout";

function OrderLandingPage() {
  const cards = [{
    title: 'Sales Orders',
    icon: <FaCartPlus size={32} />,
    href: 'sales-orders'
  }, {
    title: 'Packages',
    icon: <FaShoppingBag size={32} />,
    href: 'packages'
  }, {
    title: 'Shipments',
    icon: <FaLuggageCart size={32} />,
    href: 'shipments'
  }];

  return (
    <div>
      <PageTitle title="Manage Orders" />
      <CardLayout cards={cards} />
    </div>
  );
}

export default OrderLandingPage;
