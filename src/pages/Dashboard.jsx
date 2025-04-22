import { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../services/Api";
import useDebounce from "../Hooks/useDebounce";
import { Link } from "react-router-dom";
import '../assets/styles/dashboard.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Dashboard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteModal, setDeleteModal] = useState({ isVisible: false, productId: null });
    const [successModal, setSuccessModal] = useState(false);
    const [viewModal, setViewModal] = useState({ isVisible: false, product: null });
    const [searchTerm, setSearchTerm] = useState(""); 
    const debouncedSearchTerm = useDebounce(searchTerm, 500); 
    const isURL = (str) => /^(https?:\/\/)/.test(str);
    const getImageSource = (imagePath) => {
        return isURL(imagePath) ? imagePath : `/assets/images/${imagePath}.png`;
    };


    const getProducts = async () => {
        try {
            const data = await fetchProducts();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        // const getProducts = async () => {
        //     try {
        //         const data = await fetchProducts();
        //         setProducts(data);
        //         setLoading(false);
        //     } catch (error) {
        //         setError(error.message);
        //         setLoading(false);
        //     }
        // };
        getProducts();
    }, []);

    useEffect(() => {
        if (debouncedSearchTerm) {
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            );
            setProducts(filteredProducts);
        } else {
            const getProducts = async () => {
                try {
                    const data = await fetchProducts();
                    setProducts(data);
                } catch (error) {
                    setError(error.message);
                }
            };
            getProducts();
        }
    }, [debouncedSearchTerm]);

    const handleDelete = async () => {
        if (!deleteModal.productId) return;

        try {
            await deleteProduct(deleteModal.productId);
            // setProducts(products.filter(product => product.id !== deleteModal.productId));
            getProducts();
            closeModal();
            openSuccessModal();
        } catch (error) {
            setError(error.message);
        }
    };

    const openModal = (id) => {
        setDeleteModal({ isVisible: true, productId: id });
    };

    const closeModal = () => {
        setDeleteModal({ isVisible: false, productId: null });
    };

    const openSuccessModal = () => {
        setSuccessModal(true);
        setTimeout(() => setSuccessModal(false), 2000);
    };

    const openViewModal = (product) => {
        setViewModal({ isVisible: true, product });
    };

    const closeViewModal = () => {
        setViewModal({ isVisible: false, product: null });
    };

    return (
        <div>
            <Header />
            <div className="container mt-4">
                <div className="card shadow p-4">
                    <h4 className="text-center text-primary fw-bold">Admin Page - Manage Products</h4>

                    <div className="input-group my-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search products by name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-primary">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead className="table-primary">
                                <tr>
                                    <th>PRODUCT ID</th>
                                    <th>PRODUCT NAME</th>
                                    <th>ORIGINAL PRICE</th>
                                    <th>CURRENT PRICE</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody className="dashboard-table-body">
                                {loading && <tr><td colSpan="5" className="text-center">Loading...</td></tr>}
                                {error && <tr><td colSpan="5" className="text-center">Error: {error}</td></tr>}
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.originalPrice}$</td>
                                        <td>{product.thenPrice}$</td>
                                        <td>
                                            <div className="d-flex justify-content-center gap-2 flex-wrap">
                                                <button className="btn btn-success btn-sm" onClick={() => openViewModal(product)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8ZM8 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Z" />
                                                        <path d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                                    </svg> View
                                                </button>

                                                <button
                                                    className="btn btn-warning btn-sm"
                                                    onClick={() => {
                                                        console.log(`#/form?id=${product.id}`); // Debugging
                                                        window.location.href = `#/form?id=${product.id}`; // Use HashRouter-compatible URL
                                                    }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706l-1.538 1.538-2.12-2.12 1.538-1.538a.5.5 0 0 1 .707 0l1.414 1.414ZM10.854 3.146l-8.5 8.5A.5.5 0 0 0 2 12v2.5a.5.5 0 0 0 .5.5H5a.5.5 0 0 0 .354-.146l8.5-8.5-2.12-2.12Z" />
                                                    </svg> Edit
                                                </button>

                                                <button className="btn btn-danger btn-sm" onClick={() => openModal(product.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5ZM8 6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6A.5.5 0 0 1 8 6Zm3 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6A.5.5 0 0 1 11 6ZM14.5 3a1 1 0 0 1-1 1h-11a1 1 0 1 1 0-2h2.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1H13.5a1 1 0 0 1 1 1ZM4.118 4l.42 9.839A2 2 0 0 0 6.535 16h2.93a2 2 0 0 0 1.997-2.161L11.882 4H4.118Z" />
                                                    </svg> Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {viewModal.isVisible && (
                            <div className="modal-background active d-flex justify-content-center align-items-center">
                                <div className="view-modal modal-dialog" style={{ width: "500px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                                    <div className="modal-content border-0 p-4">
                                        <div className="modal-header">
                                            <h5 className="modal-title text-primary fs-4">Product Details</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p><strong>Product ID:</strong> {viewModal.product.id}</p>
                                            <p><strong>Name:</strong> {viewModal.product.name}</p>
                                            <p><strong>Original Price:</strong> {viewModal.product.originalPrice}$</p>
                                            <p><strong>Current Price:</strong> {viewModal.product.thenPrice}$</p>
                                            <p><strong>Product Image:</strong></p>
                                            <div className="mt-3">
                                                <img 
                                                    src={getImageSource(viewModal.product.imageName)} 
                                                    alt={viewModal.product.name} 
                                                    style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "8px" }} 
                                                />
                                            </div>
                                        </div>
                                        <div className="modal-footer mt-3">
                                            <button className="btn btn-secondary" onClick={closeViewModal}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {deleteModal.isVisible && (
                            <div className="modal-background active">
                                <div className="delete-modal modal-dialog">
                                    <div className="modal-content rounded-3 shadow">
                                        <svg onClick={closeModal} className="modal-close-btn align-self-end mt-1 me-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                            <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                        </svg>
                                        <div className="modal-body p-4 text-center">
                                            <h5 className="mb-0 text-uppercase">Confirm Delete</h5>
                                            <p className="mb-0">Are you sure you want to delete this product?</p>
                                        </div>
                                        <div className="modal-footer flex-nowrap p-0">
                                            <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end" onClick={handleDelete}>
                                                <strong>Yes, please</strong>
                                            </button>
                                            <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" onClick={closeModal}>
                                                No thanks
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {successModal && (
                            <div className="modal-background active d-flex justify-content-center align-items-center">
                                <div className="success-modal modal-dialog" style={{ width: "500px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                                    <div className="modal-content border-0">
                                        <div className="modal-body p-4 text-center">
                                            <h5 className="mb-0 text-uppercase text-success">Success</h5>
                                            <p className="mb-0 text-success">Product deleted successfully!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="text-center mt-3">
                        <Link to={"/form"} className="btn btn-primary">Add New Product</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
