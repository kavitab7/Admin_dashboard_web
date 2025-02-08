import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { MdManageAccounts, MdOutlineReport } from "react-icons/md";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

const AdminSidebar = () => {
    const location = useLocation();

    const [showModal, setShowModal] = useState<boolean>(false);
    const [phoneActive, setPhoneActive] = useState<boolean>(
        window.innerWidth < 1100
    );

    const resizeHandler = () => {
        setPhoneActive(window.innerWidth < 1100);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <>
            {phoneActive && (
                <button id="hamburger" onClick={() => setShowModal(true)}>
                    <HiMenuAlt4 />
                </button>
            )}

            <aside
                style={
                    phoneActive
                        ? {
                            width: "20rem",
                            height: "100vh",
                            position: "fixed",
                            top: 0,
                            left: showModal ? "0" : "-20rem",
                            transition: "all 0.5s",
                        }
                        : {}
                }
            >
                <h2>Dash.</h2>
                <DivOne location={location} />
                <DivTwo location={location} />
                <DivThree location={location} />

                {phoneActive && (
                    <button id="close-sidebar" onClick={() => setShowModal(false)}>
                        Close
                    </button>
                )}
            </aside>
        </>
    );
};

const DivOne = ({ location }: { location: Location }) => (
    <div>
        <h5>Dashboard</h5>
        <ul>
            <Li
                url="/"
                text="Dashboard"
                Icon={RiDashboardFill}
                location={location}
            />
            <Li
                url="/admin/product"
                text="Product"
                Icon={RiShoppingBag3Fill}
                location={location}
            />
            <Li
                url="/admin/customer"
                text="Customer"
                Icon={IoIosPeople}
                location={location}
            />
            <Li
                url="/admin/transaction"
                text="Transaction"
                Icon={AiFillFileText}
                location={location}
            />
        </ul>
    </div>
);

const DivTwo = ({ location }: { location: Location }) => (
    <div>
        <h5>Charts</h5>
        <ul>
            <Li
                url="/admin/chart/bar"
                text="Bar"
                Icon={FaChartBar}
                location={location}
            />
            <Li
                url="/admin/chart/pie"
                text="Pie"
                Icon={FaChartPie}
                location={location}
            />
            <Li
                url="/admin/chart/line"
                text="Line"
                Icon={FaChartLine}
                location={location}
            />
        </ul>
    </div>
);

const DivThree = ({ location }: { location: Location }) => (
    <div>
        <h5>Management</h5>
        <ul>
            <Li url="/admin/orders" text="Orders" Icon={MdManageAccounts} location={location} />
            <Li url="/admin/users" text="Users" Icon={FiUsers} location={location} />
            <Li url="/admin/reports" text="Reports" Icon={MdOutlineReport} location={location} />
        </ul>
    </div>
);
interface LiProps {
    url: string;
    text: string;
    location: Location;
    Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => {
    const isActive = url === "/" ? location.pathname === url : location.pathname.startsWith(url);

    return (
        <li style={{ backgroundColor: isActive ? "black" : "white" }}>
            <Link
                to={url}
                style={{
                    color: isActive ? "rgb(5 224 160)" : "white",
                }}
            >
                <Icon />
                {text}
            </Link>
        </li>
    );
};


export default AdminSidebar;