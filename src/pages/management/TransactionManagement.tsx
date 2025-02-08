import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
    "https://images.unsplash.com/photo-1587019157391-28e70a177aea?auto=format&fit=crop&w=800&q=80";

const orderItems: OrderItemType[] = [
    {
        name: "Lenovo ThinkPad X1",
        photo: img,
        _id: "prod1234",
        quantity: 1,
        price: 125000,
    },
];

const TransactionManagement = () => {
    const [order, setOrder] = useState<OrderType>({
        name: "Kavita Bhosale",
        address: "Kalewadi",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        pinCode: 411017,
        status: "Processing",
        subtotal: 125000,
        discount: 5000,
        shippingCharges: 500,
        tax: 2500,
        total: 125000 + 2500 + 500 - 5000,
        orderItems,
        _id: "order5678",
    });

    const {
        name,
        address,
        city,
        country,
        state,
        pinCode,
        subtotal,
        shippingCharges,
        tax,
        discount,
        total,
        status,
    } = order;

    const updateHandler = () => {
        setOrder((prev) => ({
            ...prev,
            status:
                prev.status === "Processing"
                    ? "Shipped"
                    : prev.status === "Shipped"
                        ? "Delivered"
                        : "Delivered",
        }));
    };

    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="transaction-management">
                <section className="order-items">
                    <h2>Order Items</h2>

                    {order.orderItems.map((item) => (
                        <ProductCard
                            key={item._id}
                            name={item.name}
                            photo={item.photo}
                            _id={item._id}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    ))}
                </section>

                <article className="order-info">
                    <h1>Order Details</h1>
                    <h5>User Info</h5>
                    <p>Name: {name}</p>
                    <p>
                        Address: {`${address}, ${city}, ${state}, ${country} - ${pinCode}`}
                    </p>

                    <h5>Amount Info</h5>
                    <p>Subtotal: ₹{subtotal}</p>
                    <p>Shipping Charges: ₹{shippingCharges}</p>
                    <p>Tax: ₹{tax}</p>
                    <p>Discount: ₹{discount}</p>
                    <p className="total">Total: ₹{total}</p>

                    <h5>Status</h5>
                    <p>
                        <span
                            className={`status-badge ${status === "Delivered"
                                ? "delivered"
                                : status === "Shipped"
                                    ? "shipped"
                                    : "processing"
                                }`}
                        >
                            {status}
                        </span>
                    </p>

                    <button onClick={updateHandler} className="update-status-btn">
                        Process Status
                    </button>
                </article>
            </main>
        </div>
    );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
    <div className="transaction-product-card">
        <img src={photo} alt={name} className="product-image" />
        <Link to={`/product/${_id}`}>{name}</Link>
        <span>
            ₹{price} × {quantity} = ₹{price * quantity}
        </span>
    </div>
);

export default TransactionManagement;
