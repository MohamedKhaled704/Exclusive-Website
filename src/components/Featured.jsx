import "../assets/styles/Featured.css";

export default function Featured() {
    return (
        <div className="featured container-fluid">
            <div className="container">
                <div>
                    <div className="row">
                        <div className="d-flex align-items-center gap-4 flex-wrap">
                            <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="40" rx="4" fill="#DB4444" />
                            </svg>
                            <h3 className="text-danger fs-4">Featured</h3>
                        </div>
                    </div>
                    <div className="cat-head d-flex justify-content-between align-items-center mt-4">
                        <h4 className="cat-h4 text-capitalize fs-md-2 m-0">new arrival</h4>
                    </div>
                </div>
                <div className="mt-5 row row-gap-4">
                    <div className="bg-black pt-5 px-4 col-md-6 col-12 position-relative rounded-2">
                        <img className="img-fluid" src={import.meta.env.BASE_URL + "/assets/images/ps5-slim-goedkope-playstation_large 1.png"} alt="ps5" />
                        <div className="playstaion-text d-flex flex-column text-white px-4 mb-4">
                            <h4 className="fs-5 mt-3">PlayStation 5</h4>
                            <p className="">Black and White version of the PS5 <br /> coming out on sale.</p>
                            <a href="" className="text-capitalize text-white link-offset-3">shop now</a>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-4 col-md-6 col-12">
                    <div className="position-relative rounded-2" style={{ backgroundColor: "#0D0D0D" }}>
                        <img className="woman-img img-fluid ms-5" src={import.meta.env.BASE_URL + "/assets/images/attractive-woman-wearing-hat-posing-black-background 1.png"} alt="ps5" />
                        <div className="playstaion-text d-flex flex-column text-white px-4 mb-4">
                            <h4 className="fs-5 mt-3">Women’s Collections</h4>
                            <p className="">Featured woman collections that <br /> give you another vibe.</p>
                            <a href="" className="text-capitalize text-white link-offset-3">shop now</a>
                        </div>
                    </div>
                    <div className="small-divs d-flex justify-content-between gap-4">
                    <div className="position-relative rounded-2 px-5 py-3" style={{ backgroundColor: "#0D0D0D" }}>
                        <img className="img-fluid" src={import.meta.env.BASE_URL + "/assets/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"} alt="ps5" />
                        <div className="playstaion-text d-flex flex-column text-white px-4 mb-4">
                            <h4 className="fs-5 mt-3">Speakers</h4>
                            <p className="">Amazon wireless speakers</p>
                            <a href="" className="text-capitalize text-white link-offset-3">shop now</a>
                        </div>
                    </div>
                    <div className="position-relative rounded-2 px-5 py-3" style={{ backgroundColor: "#0D0D0D" }}>
                        <img className="img-fluid" src={import.meta.env.BASE_URL + "/assets/images/652e82cd70aa6522dd785109a455904c.png"} alt="ps5" />
                        <div className="playstaion-text d-flex flex-column text-white px-4 mb-4">
                            <h4 className="fs-5 mt-3">Perfume</h4>
                            <p className="">GUCCI INTENSE OUD EDP</p>
                            <a href="" className="text-capitalize text-white link-offset-3">shop now</a>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
