import { Link } from "react-router-dom";
import moment from "moment";

import BaseGrid from "ui/BaseGrid";
import Badge from "ui/Badge";

function UserList() {
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
      header: "User",
      dataIndex: "email",
      searchable: true,
      sortable: true,
      formatter: (row: any) => {
        debugger;
        return (
          <Link to={"/"}>
            <img src={row.avatar} alt={"Avatar"}/>
            <span>{row.getValue()}</span>
          </Link>
        )
      }
    },
    {
      header: "Phone",
      dataIndex: "phone",
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
      header: "Last Login At",
      dataIndex: "lastLoginAt",
      searchable: true,
      sortable: true,
      formatter: (row: any) => moment(row.getValue()).format("DD-MMM-YYYY hh:mm:ss A"),
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
        gridUrl="http://localhost:4000/settings/user/list"
      />
    </div>
  );
}

export default UserList;
