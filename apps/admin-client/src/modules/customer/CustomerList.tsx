import moment from "moment";

import BaseGrid from "ui/BaseGrid";
import PageTitle from "ui/PageTitle";
import Badge from "ui/Badge";
import HyperLink from "ui/HyperLink";

function CustomerList() {
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
      header: "Order Id",
      dataIndex: "id",
      searchable: true,
      sortable: true,
      formatter: (row: any) => <HyperLink to={"/"}>{row.getValue()}</HyperLink>,
    },
    {
      header: "Customer Id",
      dataIndex: "customerId",
      searchable: true,
      sortable: true,
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
        gridUrl="http://localhost:4000/order/salesorder/list"
      />
    </div>
  );
}

export default CustomerList;
