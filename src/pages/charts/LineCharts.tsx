import AdminSidebar from "../../components/AdminSidebar";
import { LineChart } from "../../components/Charts";

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const LineCharts = () => {
    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="chart-container">
                <h1 className="chart-title">Line Charts Overview</h1>

                <section className="chart-section">
                    <h2>👥 Active Users Growth</h2>
                    <LineChart
                        data={[250, 480, 500, 580, 820, 480, 1050, 1400, 300, 600, 1100, 1250]}
                        label="Users"
                        borderColor="rgb(53, 162, 255)"
                        backgroundColor="rgba(53, 162, 255, 0.5)"
                        labels={months}
                    />
                </section>

                <section className="chart-section">
                    <h2>🛍️ Total Products (SKU)</h2>
                    <LineChart
                        data={[50, 70, 260, 120, 160, 140, 50, 60, 80, 90, 45, 30]}
                        backgroundColor={"hsla(269,80%,40%,0.4)"}
                        borderColor={"hsl(269,80%,40%)"}
                        label="Products"
                        labels={months}
                    />
                </section>

                <section className="chart-section">
                    <h2>💰 Total Revenue (₹)</h2>
                    <LineChart
                        data={[25000, 15000, 26000, 36000, 95000, 21000, 27000, 46000, 102000, 150000, 108000, 130000]}
                        backgroundColor={"hsla(129,80%,40%,0.4)"}
                        borderColor={"hsl(129,80%,40%)"}
                        label="Revenue"
                        labels={months}
                    />
                </section>

                <section className="chart-section">
                    <h2>🎁 Discounts Given</h2>
                    <LineChart
                        data={[9500, 13000, 13000, 9500, 1200, 6000, 5000, 1400, 1300, 1800, 2500, 6000]}
                        backgroundColor={"hsla(29,80%,40%,0.4)"}
                        borderColor={"hsl(29,80%,40%)"}
                        label="Discount"
                        labels={months}
                    />
                </section>
            </main>
        </div>
    );
};

export default LineCharts;
