import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const BarCharts = () => {
    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="chart-container">
                <h1 className="chart-title">Bar Charts Overview</h1>

                <section className="chart-section">
                    <h2>🛒 Top Selling Products vs. Active Users</h2>
                    <BarChart
                        data_1={[250, 500, 400, 600, 800, 500, 950]}
                        data_2={[320, 180, 450, 700, 290, 800, 260]}
                        title_1="Products"
                        title_2="Users"
                        bgColor_1={`hsl(220, 60%, 50%)`}
                        bgColor_2={`hsl(10, 90%, 60%)`}
                    />
                </section>

                <section className="chart-section">
                    <h2>📦 Orders Trend Throughout the Year</h2>
                    <BarChart
                        horizontal={true}
                        data_1={[180, 500, 350, 580, 750, 490, 980, 420, 140, 310, 870, 910]}
                        data_2={[]}
                        title_1="Orders"
                        title_2=""
                        bgColor_1={`hsl(150, 50%, 50%)`}
                        bgColor_2=""
                        labels={months}
                    />
                </section>
            </main>
        </div>
    );
};

export default BarCharts;
