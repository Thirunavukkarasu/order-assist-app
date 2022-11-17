import { Link } from "react-router-dom";
import moment from "moment";

import BaseGrid from "ui/BaseGrid";
import PageTitle from "ui/PageTitle";
import Badge from "ui/Badge";

function ProductList() {
  const columns = [
    {
      header: "Date",
      dataIndex: "createdAt",
      searchable: true,
      sortable: true,
      formatter: (row: any) =>
        moment(row.getValue()).format("DD-MMM-YYYY hh:mm:ss A"),
    },
    {
      header: "SKU Id",
      dataIndex: "id",
      searchable: true,
      sortable: true,
      formatter: (row: any) => <Link to={"/"}>{row.getValue()}</Link>,
    },
    {
      header: "Status",
      dataIndex: "status",
      searchable: true,
      sortable: true,
      formatter: (row: any) => <Badge>{row.getValue()}</Badge>,
    },
    {
      header: "Amount",
      dataIndex: "amount",
      searchable: true,
      sortable: true,
    },
    {
      header: "Updated At",
      dataIndex: "updatedAt",
      searchable: true,
      sortable: true,
      formatter: (row: any) =>
        moment(row.getValue()).format("DD-MMM-YYYY hh:mm:ss A"),
    },
  ];

  return (
    <div>
      <BaseGrid
        columns={columns}
        gridUrl="http://localhost:4000/order/shipment/list"
      />
    </div >
  );
}

export default ProductList;
