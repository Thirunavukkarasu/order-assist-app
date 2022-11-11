import { Link } from "react-router-dom";

function OrderLandingPage() {
  return (
    <div>
      <h1>Manage Orders</h1>
      <section style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="sales-orders">Sales Orders</Link>
        <Link to="packages">Packages</Link>
        <Link to="shipments">Shipments</Link>
      </section>
    </div>
  );
}

export default OrderLandingPage;
