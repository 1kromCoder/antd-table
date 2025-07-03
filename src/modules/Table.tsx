import { Divider, Table, type TableColumnsType, type TableProps } from "antd";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Alex",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "4",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
];

const CustomTable: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rowSelection: TableProps<DataType>["rowSelection"] = {
    onChange: (_selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      dispatch(addUser(selectedRows));
    },
  };

  return (
    <div>
      <Divider />

      <Table<DataType>
        rowSelection={{ ...rowSelection }}
        columns={columns}
        dataSource={data}
      />
        <div className="flex items-center justify-around">
        <button className="bg-blue-500 text-white w-[190px] rounded-md p-2" onClick={() => navigate("/selected")}>
          Tanlanganlarni ko‘rish
        </button>
        </div>
    </div>
  );
};

export default CustomTable;
