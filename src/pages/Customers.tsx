import { ReactElement } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import { useState, useCallback } from "react";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
    avatar: ReactElement;
    name: string;
    email: string;
    gender: string;
    role: string;
    action: ReactElement;
}

const columns: Column<DataType>[] = [
    {
        Header: "Avatar",
        accessor: "avatar",
    },
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "Gender",
        accessor: "gender",
    },
    {
        Header: "Email",
        accessor: "email",
    },
    {
        Header: "Role",
        accessor: "role",
    },
    {
        Header: "Action",
        accessor: "action",
    },
];

const img1 = "https://randomuser.me/api/portraits/women/45.jpg";
const img2 = "https://randomuser.me/api/portraits/men/40.jpg";

const arr: DataType[] = [
    {
        avatar: (
            <img
                style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                }}
                src={img1}
                alt="Kavita Bhosale"
            />
        ),
        name: "Kavita Bhosale",
        email: "kavita.bhosale@example.com",
        gender: "Female",
        role: "Admin",
        action: (
            <button className="delete-btn">
                <FaTrash />
            </button>
        ),
    },

    {
        avatar: (
            <img
                style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                }}
                src={img2}
                alt="Rahul Sharma"
            />
        ),
        name: "Rahul Sharma",
        email: "rahul.sharma@example.com",
        gender: "Male",
        role: "User",
        action: (
            <button className="delete-btn">
                <FaTrash />
            </button>
        ),
    },
];

const Customers = () => {
    const [data] = useState<DataType[]>(arr);

    const Table = useCallback(
        TableHOC<DataType>(columns, data, "dashboard-product-box", "Customers", true),
        []
    );

    return (
        <div className="admin-container">
            <AdminSidebar />
            <main>{Table()}</main>
        </div>
    );
};

export default Customers;
