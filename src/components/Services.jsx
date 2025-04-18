import "../assets/styles/Services.css";

export default function Services() {
    return (
        <div>
            <div className="services container-fluid">
                <div className="services-container container">
                    <div className="row justify-content-center row-gap-3">
                    <div className="services-card col-lg-4 col-md-6 d-flex flex-column align-items-center">
                        {/* <img className="mb-4" src="./src/assets/images/Services.png" alt="service" /> */}
                        <img className="mb-4" src={import.meta.env.BASE_URL + "/assets/images/Services.png"} alt="service" />
                        <h4 className="fs-5 fw-bold">FREE AND FAST DELIVERY</h4>
                        <p>Free delivery for all orders over $140</p>
                    </div>
                    <div className="services-card col-lg-4 col-md-6 d-flex flex-column align-items-center">
                        <img className="mb-4" src="./src/assets/images/Services (1).png" alt="service" />
                        <h4 className="fs-5 fw-bold">24/7 CUSTOMER SERVICE</h4>
                        <p>Friendly 24/7 customer support</p>
                    </div>
                    <div className="services-card col-lg-4 col-md-6 d-flex flex-column align-items-center">
                        <img className="mb-4" src="./src/assets/images/Services (2).png" alt="service" />
                        <h4 className="fs-5 fw-bold">MONEY BACK GUARANTEE</h4>
                        <p>We reurn money within 30 days</p>
                    </div>
                </div>
                    
                </div>
            </div>
        </div>
    )
}
