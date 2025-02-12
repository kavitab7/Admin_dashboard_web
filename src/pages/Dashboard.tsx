import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import Table from "../components/DashboardTable";
import { RiShoppingBag3Fill } from "react-icons/ri";

const Dashboard = () => {
    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="dashboard">
                <div className="bar">
                    <BsSearch />
                    <input type="text" placeholder="Search for data, users, docs" />
                    <FaRegBell />
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s' alt="User Profile" />
                </div>

                <section className="widget-container">
                    <WidgetItem percent={60} amount value={542000} heading="Revenue" color="rgb(0,115,255)" />
                    <WidgetItem percent={33} value={300} heading="Users" color="rgb(202, 81, 0)" />
                    <WidgetItem percent={-51} value={65000} heading="Transactions" color="rgb(255,196,0)" />
                    <WidgetItem percent={80} value={2000} heading="Products" color="rgb(140, 0, 255)" />
                </section>

                <section className="graph-container">
                    <div className="revenue-chart">
                        <h2>Revenue & Transactions</h2>
                        <BarChart
                            data_2={[401, 344, 333, 555, 257, 455, 290]}
                            data_1={[250, 244, 743, 156, 338, 755, 800]}
                            title_1="Revenue"
                            title_2="Transaction"
                            bgColor_1="rgb(4, 170, 120)"
                            bgColor_2="rgb(96, 255, 207)"
                        />
                    </div>

                    <div className="dashboard-categories">
                        <h2>Inventory</h2>
                        <div>
                            {data.categories.map((category) => (
                                <CategoryItem
                                    key={category.heading}
                                    heading={category.heading}
                                    value={category.value}
                                    color={`hsl(${category.value * 4},${category.value}%,40%)`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="transaction-container">
                    <div className="gender-chart">
                        <h2>Order Status</h2>

                        <DoughnutChart
                            labels={["Processing", "Shipped", "Delivered"]}
                            data={[10, 20, 15]}
                            backgroundColor={["#ffcc00", "#4caf50", "#2196f3"]}
                            cutout={90}
                        />

                        <p>
                            <RiShoppingBag3Fill />
                        </p>

                    </div>

                    <Table data={data.transaction} />
                </section>
            </main>
        </div>
    );
};

interface WidgetItemProps {
    heading: string;
    value: number;
    percent: number;
    color: string;
    amount?: boolean;
}

const WidgetItem = ({ heading, value, percent, color, amount = false }: WidgetItemProps) => (
    <article className="widget">
        <div className="widget-info">
            <p>{heading}</p>
            <h4>{amount ? `$${value.toLocaleString()}` : value.toLocaleString()}</h4>
            {percent > 0 ? (
                <span className="green">
                    <HiTrendingUp /> +{percent}%{" "}
                </span>
            ) : (
                <span className="red">
                    <HiTrendingDown /> {percent}%{" "}
                </span>
            )}
        </div>

        <div
            className="widget-circle"
            style={{
                background: `conic-gradient(
          ${color} ${(Math.abs(percent) / 100) * 360}deg,
           rgb(39, 39, 39) 0
        )`,
            }}
        >
            <span style={{ color }}>{percent}%</span>
        </div>
    </article>
);

interface CategoryItemProps {
    color: string;
    value: number;
    heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
    <div className="category-item">
        <h5>{heading}</h5>
        <div>
            <div
                style={{
                    backgroundColor: color,
                    width: `${value}%`,
                }}
            ></div>
        </div>
        <span>{value}%</span>
    </div>
);

export default Dashboard;
