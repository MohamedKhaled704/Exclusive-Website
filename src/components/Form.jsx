import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import { addProduct, updateProduct, getProductById } from "../services/Api";

export default function Form() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [productId, setProductId] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);

    const [productData, setProductData] = useState({
        name: "",
        originalPrice: "",
        thenPrice: "",
        imageName: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        if (!productId) {
            setError("Product ID is missing. Cannot update the product.");
            setLoading(false);
            return;
        }

        try {
            await updateProduct(productId, {
                name: productData.name,
                originalPrice: parseFloat(productData.originalPrice),
                thenPrice: parseFloat(productData.thenPrice),
                imageName: productData.imageName
            });
            setSuccess("Product updated successfully!");
            setTimeout(() => {
                window.location.hash = "#/dashboard";
            }, 2000);
        } catch (error) {
            setError(error.response?.status === 404 ? "Product not found. Please check the product ID." : error.message || "An error occurred while updating the product.");
        } finally {
            setLoading(false);
        }
    };

    const isValidImagePath = (path) => {
        const isURL = /^(https?:\/\/).+(\.png|\.jpg|\.jpeg|\.gif)?(\?.*)?$/i.test(path); 
        const isRelativePath = /^[a-zA-Z0-9_\-/]+(\.png|\.jpg|\.jpeg|\.gif)$/i.test(path);
        return isURL || isRelativePath;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        if (!isValidImagePath(productData.imageName)) {
            setError("Invalid image path. Please provide a valid URL or relative path.");
            setLoading(false);
            return;
        }

        try {
            await addProduct({
                name: productData.name,
                originalPrice: parseFloat(productData.originalPrice),
                thenPrice: parseFloat(productData.thenPrice),
                imageName: productData.imageName
            });
            setSuccess("Product added successfully!");
            setTimeout(() => clearForm(true), 2000);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const clearForm = (resetMode = true) => {
        setProductData({
            name: "",
            originalPrice: "",
            thenPrice: "",
            imageName: ""
        });
        if (resetMode) {
            setIsUpdate(false);
            setProductId(null);
        }
        setError(null);
        setSuccess(null);
    };

    useEffect(() => {
        const id = new URLSearchParams(window.location.hash.split('?')[1]).get("id");
        if (id) {
            setIsUpdate(true);
            setProductId(id);
            setLoading(true);

            getProductById(id)
                .then((product) => {
                    if (!product || Object.keys(product).length === 0) {
                        throw new Error("Product not found in the database.");
                    }
                    setProductData({
                        name: product.name || "",
                        originalPrice: product.originalPrice?.toString() || "",
                        thenPrice: product.thenPrice?.toString() || "",
                        imageName: product.imageName || ""
                    });
                })
                .catch((error) => {
                    setError(error.message || "Unable to fetch product details. Please ensure the product ID is correct or try again later.");
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setIsUpdate(false);
            setProductData({
                name: "",
                originalPrice: "",
                thenPrice: "",
                imageName: ""
            });
        }
    }, []);

    return (
        <div>
            <Header />
            <div className="container mt-4">
                <div className="card shadow p-4">
                    <h4 className="text-center text-primary fw-bold">
                        {isUpdate ? "Update Product" : "Add Product"}
                    </h4>
                    {loading && <div className="alert alert-info text-center">Loading...</div>}
                    {error && <div className="alert alert-danger text-center">{error}</div>}
                    {success && <div className="alert alert-success text-center">{success}</div>}
                    <form onSubmit={(e) => (isUpdate ? handleUpdate(e) : handleFormSubmit(e))}>
                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label">Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="productName"
                                name="name"
                                value={productData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="originalPrice" className="form-label">Original Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="originalPrice"
                                name="originalPrice"
                                value={productData.originalPrice}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="currentPrice" className="form-label">Current Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="currentPrice"
                                name="thenPrice"
                                value={productData.thenPrice}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="product-img" className="form-label">Product image</label>
                            <input
                                type="url"
                                className="form-control"
                                id="product-img"
                                name="imageName"
                                value={productData.imageName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {isUpdate ? "Update Product" : "Add Product"}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
