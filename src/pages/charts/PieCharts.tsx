import AdminSidebar from "../../components/AdminSidebar";
import { DoughnutChart, PieChart } from "../../components/Charts";
import { categories } from "../../assets/data.json";

const PieCharts = () => {
    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="chart-container">
                <h1 className="chart-title">Pie & Doughnut Charts Overview</h1>

                <section className="chart-section">
                    <h2>📦 Order Fulfillment Status</h2>
                    <PieChart
                        labels={["Processing", "Shipped", "Delivered"]}
                        data={[15, 8, 17]}
                        backgroundColor={[
                            `hsl(210, 80%, 80%)`,
                            `hsl(210, 80%, 50%)`,
                            `hsl(210, 40%, 50%)`,
                        ]}
                        offset={[0, 0, 40]}
                    />
                </section>

                <section className="chart-section">
                    <h2>📑 Product Categories Ratio</h2>
                    <DoughnutChart
                        labels={categories.map((i) => i.heading)}
                        data={categories.map((i) => i.value + 5)}
                        backgroundColor={categories.map(
                            (i) => `hsl(${i.value * 3.5},${i.value}%, 55%)`
                        )}
                        legends={false}
                        offset={[0, 10, 0, 70]}
                    />
                </section>

                <section className="chart-section">
                    <h2>📦 Stock Availability</h2>
                    <DoughnutChart
                        labels={["In Stock", "Out Of Stock"]}
                        data={[35, 15]}
                        backgroundColor={["hsl(180,70%,50%)", "rgb(255, 99, 132)"]}
                        legends={false}
                        offset={[0, 70]}
                        cutout={"65%"}
                    />
                </section>

                <section className="chart-section">
                    <h2>💰 Revenue Breakdown</h2>
                    <DoughnutChart
                        labels={["Marketing", "Discounts", "Returns", "Production", "Profit"]}
                        data={[28, 20, 7, 18, 27]}
                        backgroundColor={[
                            "hsl(120,80%,50%)",
                            "hsl(30,80%,50%)",
                            "hsl(60,80%,50%)",
                            "hsl(300,80%,50%)",
                            "rgb(255, 159, 64)",
                        ]}
                        legends={false}
                        offset={[10, 20, 10, 20, 70]}
                    />
                </section>

                <section className="chart-section">
                    <h2>👥 Users by Age Group</h2>
                    <PieChart
                        labels={["Teenagers (Below 20)", "Adults (20-40)", "Seniors (40+)"]}
                        data={[35, 220, 90]}
                        backgroundColor={[
                            `hsl(350, 80%, 80%)`,
                            `hsl(350, 80%, 50%)`,
                            `hsl(350, 40%, 50%)`,
                        ]}
                        offset={[0, 0, 50]}
                    />
                </section>

                <section className="chart-section">
                    <h2>🛠️ User Roles Distribution</h2>
                    <DoughnutChart
                        labels={["Admin", "Customers"]}
                        data={[30, 270]}
                        backgroundColor={[`hsl(335, 100%, 38%)`, "hsl(44, 98%, 50%)"]}
                        offset={[0, 70]}
                    />
                </section>
            </main>
        </div>
    );
};

export default PieCharts;
