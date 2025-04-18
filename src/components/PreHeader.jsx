import "../assets/styles/PreHeader.css";

export default function PreHeader() {
    return (
        <div>
            {/* <div className="bg-black container-fluid">
            <div className="container"></div>
        </div> */}
            <div className="container-fluid bg-black pre-header">
                <div className="container">
                    <div className="row py-2">
                        <div className="col-lg-8 col-md-10 col-8 text-end">
                            <p className="preheader-p mb-0 text-white">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="link-light link-underline-light link-opacity-75-hover">Shop Now</a></p>
                        </div>
                        <div className="col text-end">
                            <select name="" id="">
                                <option value="english">English</option>
                                <option value="arabic">Arabic</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
