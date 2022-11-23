import { Link } from "react-router-dom";
import moment from "moment";

import BaseGrid from "ui/BaseGrid";

function RoleList() {
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
      header: "Shipment Id",
      dataIndex: "id",
      searchable: true,
      sortable: true,
      formatter: (row: any) => <Link to={"/"}>{row.getValue()}</Link>,
    },
    {
      header: "So Id",
      dataIndex: "soId",
      searchable: true,
      sortable: true,
      formatter: (row: any) => <Link to={"/"}>{row.getValue()}</Link>,
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
      formatter: (row: any) => <div className="bg-red">{row.getValue()}</div>,
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
        gridUrl="http://localhost:4000/settings/role/list"
      />
    </div>
  );
}

export default RoleList;
