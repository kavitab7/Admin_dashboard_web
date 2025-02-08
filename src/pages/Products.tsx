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
    phone: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s911bzvdins/gallery/in-galaxy-s23-s911-sm-s911bzvdins-534508112?$650_519_PNG$",
    laptop: "https://m.media-amazon.com/images/I/71cQWYVtcBL._AC_SL1500_.jpg",
    watch: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7A3_VW_34FR+watch-case-41-alum-starlight-nc-9s_VW_34FR_WF_CO?wid=1200&hei=1200&fmt=jpeg&qlt=80&.v=1692839198986",
    headphones: "https://m.media-amazon.com/images/I/61WGO7S7S9L._SL1500_.jpg",
    console: "https://m.media-amazon.com/images/I/61x9UVmKQxL._SL1500_.jpg",
    camera: "https://m.media-amazon.com/images/I/61w1fSZvLFL._SL1200_.jpg",
    tablet: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202212?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1670856720311",
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
