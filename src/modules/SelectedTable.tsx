// import { useSelector } from "react-redux";
// import { Table, Divider, Button } from "antd";
// import type { TableColumnsType } from "antd";
// import type { DataType } from "./Table";
// import { removeUser } from "../store/userSlice";

// const columns: TableColumnsType<DataType> = [
//   {
//     title: "Name",
//     dataIndex: "name",
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//   },
//   {
//     title: "Amal",
//     render: (_, record) => (
//       <Button danger onClick={() => dispatch(removeUser(record.key))}>
//         Delete
//       </Button>
//     ),
//   },
// ];

// const SelectedUsersTable: React.FC = () => {
//   const selectedUsers = useSelector((state: any) => state.user.selectedUsers);

//   return (
//     <div>
//       <Divider>Tanlangan foydalanuvchilar</Divider>
//       <Table<DataType> columns={columns} dataSource={selectedUsers} />
//     </div>
//   );
// };

// export default SelectedUsersTable;
import { useSelector, useDispatch } from "react-redux";
import { Table, Divider, Button } from "antd";
import type { TableColumnsType } from "antd";
import type { DataType } from "./Table";
import { removeUser } from "../store/userSlice";

const SelectedUsersTable: React.FC = () => {
  const dispatch = useDispatch();
  const selectedUsers = useSelector((state: any) => state.user.selectedUsers);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Amal",
      render: (_, record) => (
        <Button danger onClick={() => dispatch(removeUser(record.key))}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Divider>Tanlangan foydalanuvchilar</Divider>
      <Table<DataType>
        rowKey="key"
        columns={columns}
        dataSource={selectedUsers}
      />
    </div>
  );
};

export default SelectedUsersTable;
