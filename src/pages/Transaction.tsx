import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import { ReactElement, useState, useCallback } from "react";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
    user: ReactElement;
    amount: number;
    discount: number;
    quantity: number;
    status: ReactElement;
    action: ReactElement;
}

const columns: Column<DataType>[] = [
    {
        Header: "User",
        accessor: "user",
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Status",
        accessor: "status",
    },
    {
        Header: "Action",
        accessor: "action",
    },
];

const userAvatars = {
    alice: "https://randomuser.me/api/portraits/women/45.jpg",
    michael: "https://randomuser.me/api/portraits/men/32.jpg",
    sophia: "https://randomuser.me/api/portraits/women/60.jpg",
};

const arr: DataType[] = [
    {
        user: (
            <div className="user-info">
                <img src={userAvatars.alice} alt="Alice Johnson" className="avatar" />
                <span>Alice Johnson</span>
            </div>
        ),
        amount: 4500,
        discount: 400,
        quantity: 3,
        status: <span className="red">Processing</span>,
        action: <Link to="/admin/transaction/alice-johnson">Manage</Link>,
    },
    {
        user: (
            <div className="user-info">
                <img src={userAvatars.michael} alt="Michael Smith" className="avatar" />
                <span>Michael Smith</span>
            </div>
        ),
        amount: 6999,
        discount: 500,
        quantity: 6,
        status: <span className="green">Shipped</span>,
        action: <Link to="/admin/transaction/michael-smith">Manage</Link>,
    },
    {
        user: (
            <div className="user-info">
                <img src={userAvatars.sophia} alt="Sophia Davis" className="avatar" />
                <span>Sophia Davis</span>
            </div>
        ),
        amount: 8999,
        discount: 600,
        quantity: 4,
        status: <span className="purple">Delivered</span>,
        action: <Link to="/admin/transaction/sophia-davis">Manage</Link>,
    },
];

const Transaction = () => {
    const [data] = useState<DataType[]>(arr);

    const Table = useCallback(
        TableHOC<DataType>(columns, data, "dashboard-product-box", "Transactions", true),
        []
    );

    return (
        <div className="admin-container">
            <AdminSidebar />
            <main>{Table()}</main>
        </div>
    );
};

export default Transaction;
