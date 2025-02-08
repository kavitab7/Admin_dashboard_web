import { useState, ChangeEvent, FormEvent } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const defaultImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyzkADCtt_pXGXMw8nsXZQc_g5qIjk2Dyfw&s";

const ProductManagement = () => {
    const [name, setName] = useState<string>("Samsung Galaxy Tab S7");
    const [price, setPrice] = useState<number>(44999);
    const [stock, setStock] = useState<number>(8);
    const [photo, setPhoto] = useState<string>(defaultImage);

    const [nameUpdate, setNameUpdate] = useState<string>(name);
    const [priceUpdate, setPriceUpdate] = useState<number>(price);
    const [stockUpdate, setStockUpdate] = useState<number>(stock);
    const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

    const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = e.target.files?.[0];

        if (file) {
            const reader: FileReader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                if (typeof reader.result === "string") setPhotoUpdate(reader.result);
            };
        }
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setName(nameUpdate);
        setPrice(priceUpdate);
        setStock(stockUpdate);
        setPhoto(photoUpdate);
    };

    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="product-management">
                <section className="product-preview">
                    <strong>ID - PROD123456</strong>
                    <img src={photo} alt="Product" className="product-image" />
                    <p className="product-name">{name}</p>
                    {stock > 0 ? (
                        <span className="status available">{stock} Available</span>
                    ) : (
                        <span className="status not-available">Out of Stock</span>
                    )}
                    <h3 className="product-price">₹{price}</h3>
                </section>

                <article className="product-form">
                    <form onSubmit={submitHandler}>
                        <h2>Manage Product</h2>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                required
                                type="text"
                                placeholder="Product Name"
                                value={nameUpdate}
                                onChange={(e) => setNameUpdate(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Price</label>
                            <input
                                required
                                type="number"
                                placeholder="Price"
                                value={priceUpdate}
                                onChange={(e) => setPriceUpdate(Number(e.target.value))}
                            />
                        </div>

                        <div className="form-group">
                            <label>Stock</label>
                            <input
                                required
                                type="number"
                                placeholder="Stock"
                                value={stockUpdate}
                                onChange={(e) => setStockUpdate(Number(e.target.value))}
                            />
                        </div>

                        <div className="form-group">
                            <label>Photo</label>
                            <input required type="file" onChange={changeImageHandler} />
                        </div>

                        {photoUpdate && (
                            <img src={photoUpdate} alt="New Product Preview" className="preview-image" />
                        )}

                        <button type="submit" className="update-btn">Update</button>
                    </form>
                </article>
            </main>
        </div>
    );
};

export default ProductManagement;
