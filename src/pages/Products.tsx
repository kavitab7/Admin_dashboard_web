import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
    photo: ReactElement;
    name: string;
    price: number;
    stock: number;
    action: ReactElement;
}

const columns: Column<DataType>[] = [
    {
        Header: "Photo",
        accessor: "photo",
    },
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "Price",
        accessor: "price",
    },
    {
        Header: "Stock",
        accessor: "stock",
    },
    {
        Header: "Action",
        accessor: "action",
    },
];

const productImages = {
    phone: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQw3YXY8Wa4bz8KV04LsZLAaXMLd3VfUVzQ&s",
    laptop: "https://m.media-amazon.com/images/I/71cQWYVtcBL._AC_SL1500_.jpg",
    watch: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgzI0EbeDm3qx18I2fijRBsEpAnCv6lUS-w&s",
    headphones: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtm-hhV5HNht3GGhQkc0dAIG8l7pz31qOaVw&s",
    console: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OaFagTXwd7CKGCobM2E6aUk3vY0sLIZ7XQ&s",
    camera: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9ZQsJpW8ZtH-58CF1aaUfyDld5PalREj4g&s",
    tablet: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwuL-_nTsUOUjIKV-5XA44eQLFcZ-7GmR2zA&s",
};

const arr: DataType[] = [
    {
        photo: <img src={productImages.phone} alt="Samsung Galaxy S23" />,
        name: "Samsung Galaxy S23",
        price: 79999,
        stock: 10,
        action: <Link to="/admin/product/samsung-galaxy-s23">Manage</Link>,
    },
    {
        photo: <img src={productImages.laptop} alt="Dell XPS 15" />,
        name: "Dell XPS 15",
        price: 150000,
        stock: 5,
        action: <Link to="/admin/product/dell-xps-15">Manage</Link>,
    },
    {
        photo: <img src={productImages.watch} alt="Apple Watch Series 9" />,
        name: "Apple Watch Series 9",
        price: 42999,
        stock: 15,
        action: <Link to="/admin/product/apple-watch-series-9">Manage</Link>,
    },
    {
        photo: <img src={productImages.headphones} alt="Sony WH-1000XM5" />,
        name: "Sony WH-1000XM5",
        price: 29999,
        stock: 8,
        action: <Link to="/admin/product/sony-wh-1000xm5">Manage</Link>,
    },
    {
        photo: <img src={productImages.console} alt="PlayStation 5" />,
        name: "PlayStation 5",
        price: 55000,
        stock: 7,
        action: <Link to="/admin/product/playstation-5">Manage</Link>,
    },
    {
        photo: <img src={productImages.camera} alt="Canon EOS R6" />,
        name: "Canon EOS R6",
        price: 189999,
        stock: 4,
        action: <Link to="/admin/product/canon-eos-r6">Manage</Link>,
    },
    {
        photo: <img src={productImages.tablet} alt="iPad Pro 2024" />,
        name: "iPad Pro 2024",
        price: 119999,
        stock: 12,
        action: <Link to="/admin/product/ipad-pro-2024">Manage</Link>,
    },
];

const Products = () => {
    const [data] = useState<DataType[]>(arr);

    const Table = useCallback(
        TableHOC<DataType>(columns, data, "dashboard-product-box", "Products", true),
        []
    );

    return (
        <div className="admin-container">
            <AdminSidebar />
            <main>{Table()}</main>
            <Link to="/admin/product/new" className="create-product-btn">
                <FaPlus />
            </Link>
        </div>
    );
};

export default Products;
