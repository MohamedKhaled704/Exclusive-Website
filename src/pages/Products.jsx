import { useEffect, useState } from "react"
import { fetchProducts } from "../services/Api";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const isURL = (str) => /^(https?:\/\/)/.test(str);
    // const getImageSource = (imagePath) => {
    //     return isURL(imagePath) ? imagePath : `./src/assets/images/${imagePath}.png`;
    // };

    const getImageSource = (imagePath) => {
        return isURL(imagePath) ? imagePath : `${import.meta.env.BASE_URL}assets/images/${imagePath}.png`;
    };

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
                setLoading(false);
            }
            catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        getProducts();
    } , []);
    return (
        <>
        <Header />
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mt-5 mb-5">
                    <h1>Our Products</h1>
                </div>
                {loading && <div className="text-center">Loading...</div>}
                {error && <div className="text-center">Error: {error}</div>}
                {products.map((product) => (
                    <div className="col-12 col-md-4 mb-4" key={product.id}>
                        <div className="card">
                        <picture className="product-pic mb-2 bg-body-tertiary px-4 py-3"><img src={getImageSource(product.imageName)} className="img-fluid" alt="image" /></picture>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                {product.discountTag === true ?
                                            <div className="d-flex">
                                                <p className="text-danger fs-5 fw-bold">${product.originalPrice}</p>
                                                <p className="text-muted fs-6 ms-3 text-decoration-line-through">${product.thenPrice}</p>
                                            </div>
                                            : <p className="text-danger fs-5 fw-bold">${product.originalPrice}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    <Footer />
    </>
    )
}
