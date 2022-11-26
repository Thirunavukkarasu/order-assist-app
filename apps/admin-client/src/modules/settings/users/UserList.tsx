import { Link } from "react-router-dom";
import moment from "moment";

import BaseGrid from "ui/BaseGrid";
import Badge from "ui/Badge";
import { get } from "lodash";

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
        const avatar = get(row, "row.original.avatar", "");
        return (
          <Link to={"/"}>
            <div className="flex flex-row items-center justify-start space-x-2">
              <img
                src={avatar}
                alt={"Avatar"}
                className="w-8 h-8 rounded-full"
              />
              <span>{row.getValue()}</span>
            </div>
          </Link>
        );
      },
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
      formatter: (row: any) =>
        moment(row.getValue()).format("DD-MMM-YYYY hh:mm:ss A"),
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
      <BaseGrid columns={columns} gridUrl="/api/settings/user/list" />
    </div>
  );
}

export default UserList;
