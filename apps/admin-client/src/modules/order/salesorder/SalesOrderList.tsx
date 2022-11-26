import moment from "moment";

import BaseGrid from "ui/BaseGrid";

function SalesOrderList() {
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
      dataIndex: "soId",
      searchable: true,
      sortable: true,
      formatter: (row: any) => <div className="bg-red">{row.getValue()}</div>,
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
      formatter: (row: any) => <div>{row.getValue()}</div>,
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
      <BaseGrid columns={columns} gridUrl="/api/order/salesorder/list" />
    </div>
  );
}

export default SalesOrderList;
