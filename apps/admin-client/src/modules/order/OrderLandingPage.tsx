import { Link } from "react-router-dom";
import PageTitle from "ui/PageTitle";

function OrderLandingPage() {
  return (
    <div>
      <PageTitle title="Manage Orders" />
      <section className="flex felx-col">
        <Link to="sales-orders">Sales Orders</Link>
        <Link to="packages">Packages</Link>
        <Link to="shipments">Shipments</Link>
      </section>
    </div>
  );
}

export default OrderLandingPage;
