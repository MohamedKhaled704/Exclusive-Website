// import React from 'react'
import { useState } from 'react'
import '../assets/styles/Hero.css'


export default function Hero() {
    const slides = [
        {
            id: 1,
            logo: "/assets/images/1200px-Apple_gray_logo 1.png",
            title: "iPhone 14 Series",
            discount: "Up to 10% ",
            image: "/assets/images/hero_endframe__cvklg0xk3w6e_large 2.png"
        },
        {
            id: 2,
            logo: "/assets/images/1200px-Apple_gray_logo 1.png",
            title: "playstation 5",
            discount: "Up to 8% ",
            image: "/assets/images/hero_endframe__cvklg0xk3w6e_large 2.png"
        },
        {
            id: 3,
            logo: "/assets/images/1200px-Apple_gray_logo 1.png",
            title: "iPhone 16 Series",
            discount: "Up to 3% ",
            image: "/assets/images/hero_endframe__cvklg0xk3w6e_large 2.png"
        }
    ];

    const [slide, setSlide] = useState(0);

    const goToSlide = (index) => {
      setSlide(index);
    }
    return (
        <div>
            <div className="container-fluid border-top border-2">
                <div className="container">
                    <div className="row justify-content-center">
                        <nav className="col-xxl-2 col-12 d-none d-md-block sidebar ps-0 mt-4">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-row column-gap-4 row-gap-2">
                                    <li className="nav-item">
                                        <a className="nav-link text-black" href="#">Woman&lsquo;s Fashion</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-black" href="#">Men&lsquo;s Fashion</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-black" href="#">Electronics</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-black" href="#">Home & Lifestyle</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-black" href="#">Medicine</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-black" href="#">Sports & Outdoor</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-black" href="#">Baby&lsquo;s & Toys</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-black" href="#">Groceries & Pets</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-black" href="#">Health & Beauty</a>
                                    </li>
                                </ul>

                            </div>
                        </nav>

                        <main className="hero-poster col-xl-10 col-12 ms-sm-auto col-lg-10 px-5 border-start border-2 border-md-0">
                            <div className="d-flex flex-column mt-4 bg-black py-3 px-5">
                                <div className="row col-12">
                                    <div className="hero-poster-text text-white col-md-6 d-flex flex-column gap-3">
                                        <div className="d-flex align-items-center">
                                            <picture><img src={import.meta.env.BASE_URL + slides[slide].logo} alt="apple" /></picture>
                                            <p className='mb-0 ms-4'><small>{slides[slide].title}</small></p>
                                        </div>
                                        <h3 className='fs-\=[=] fs-md-2 fw-semibold'>{slides[slide].discount} <br />off Voucher</h3>
                                        <div className="d-flex align-items-center gap-3">
                                            <a href="#" className="link-underline-light text-light link-offset-3">Shop Now</a>
                                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </div>
                                    </div>
                                    <picture className='col-md-6'><img src={import.meta.env.BASE_URL + slides[slide].image} className='img-fluid' alt="iphone" /></picture>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                  {
                                    slides.map((_, index) => (
                                      <span
                                      key={index}
                                      className={`dot ${index === slide ? 'active' : ''}`}
                                      onClick={() => goToSlide(index)}></span>
                                    ))
                                  }
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}
