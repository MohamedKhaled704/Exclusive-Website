import "../assets/styles/Poster.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Poster() {
    return (
            <div className="poster container-fluid">
                <div className="container">
                    <div className="row bg-black">
                        <div className="col-lg-6 col-12 py-5 ps-4 d-flex flex-column gap-5 align-items-start">
                            <h4 className="poster-h4 m-0">categories</h4>
                            <p className="poster-p text-capitalize text-white fs-1 fw-semibold m-0">enhance your <br />music experience</p>
                            <div className="d-flex gap-4">
                                <div className="poster-circle py-2 d-flex flex-column align-items-center justify-content-center">
                                    <h5 className="m-0 fw-semibold">05</h5>
                                    <p className="m-0">Days</p>
                                </div>
                                <div className="poster-circle py-2 d-flex flex-column align-items-center justify-content-center">
                                    <h5 className="m-0 fw-semibold">23</h5>
                                    <p className="m-0">Hours</p>
                                </div>
                                <div className="poster-circle py-2 d-flex flex-column align-items-center justify-content-center">
                                    <h5 className="m-0 fw-semibold">59</h5>
                                    <p className="m-0">Minutes</p>
                                </div>
                                <div className="poster-circle py-2 d-flex flex-column align-items-center justify-content-center">
                                    <h5 className="m-0 fw-semibold">35</h5>
                                    <p className="m-0">Seconds</p>
                                </div>
                            </div>
                            <button className="poster-btn btn rounded-1 text-white px-4 py-2">Buy Now!</button>
                        </div>
                        <div className="poster-right col-lg-6 col-12">
                                <img className="poster-img img-fluid" src={import.meta.env.BASE_URL + "/assets/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"} alt="jpl" />
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
