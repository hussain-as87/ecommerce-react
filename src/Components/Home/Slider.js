import {Carousel} from "react-bootstrap";
import sliderimg from "../../assets/images/slider1.png";
import slider4 from "../../assets/images/slider4.png";
import prod3 from "../../assets/images/prod3.png";
import hero1 from "../../assets/images/hero/hero-1.jpg";
import hero2 from "../../assets/images/hero/hero-2.jpg";
import {useState} from "react";
const Slider = () => {
  return (
      <section className="hero">
        <div className="hero__slider owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1882px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 5646
                }}
            >
              <div className="owl-item cloned" style={{ width: 941 }}>
                <div
                    className="hero__items set-bg"
                    data-setbg="img/hero/hero-1.jpg"
                    style={{ backgroundImage: 'url("img/hero/hero-1.jpg")' }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-5 col-lg-7 col-md-8">
                        <div className="hero__text">
                          <h6>Summer Collection</h6>
                          <h2>Fall - Winter Collections 2030</h2>
                          <p>
                            A specialist label creating luxury essentials. Ethically
                            crafted with an unwavering commitment to exceptional
                            quality.
                          </p>
                          <a href="#" className="primary-btn">
                            Shop now <span className="arrow_right" />
                          </a>
                          <div className="hero__social">
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fa fa-pinterest" />
                            </a>
                            <a href="#">
                              <i className="fa fa-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: 941 }}>
                <div
                    className="hero__items set-bg"
                    data-setbg="img/hero/hero-2.jpg"
                    style={{ backgroundImage: 'url("img/hero/hero-2.jpg")' }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-5 col-lg-7 col-md-8">
                        <div className="hero__text">
                          <h6>Summer Collection</h6>
                          <h2>Fall - Winter Collections 2030</h2>
                          <p>
                            A specialist label creating luxury essentials. Ethically
                            crafted with an unwavering commitment to exceptional
                            quality.
                          </p>
                          <a href="#" className="primary-btn">
                            Shop now <span className="arrow_right" />
                          </a>
                          <div className="hero__social">
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fa fa-pinterest" />
                            </a>
                            <a href="#">
                              <i className="fa fa-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: 941 }}>
                <div
                    className="hero__items set-bg"
                    data-setbg="img/hero/hero-1.jpg"
                    style={{ backgroundImage: 'url("img/hero/hero-1.jpg")' }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-5 col-lg-7 col-md-8">
                        <div className="hero__text">
                          <h6>Summer Collection</h6>
                          <h2>Fall - Winter Collections 2030</h2>
                          <p>
                            A specialist label creating luxury essentials. Ethically
                            crafted with an unwavering commitment to exceptional
                            quality.
                          </p>
                          <a href="#" className="primary-btn">
                            Shop now <span className="arrow_right" />
                          </a>
                          <div className="hero__social">
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fa fa-pinterest" />
                            </a>
                            <a href="#">
                              <i className="fa fa-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item" style={{ width: 941 }}>
                <div
                    className="hero__items set-bg"
                    data-setbg="img/hero/hero-2.jpg"
                    style={{ backgroundImage: 'url("img/hero/hero-2.jpg")' }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-5 col-lg-7 col-md-8">
                        <div className="hero__text">
                          <h6>Summer Collection</h6>
                          <h2>Fall - Winter Collections 2030</h2>
                          <p>
                            A specialist label creating luxury essentials. Ethically
                            crafted with an unwavering commitment to exceptional
                            quality.
                          </p>
                          <a href="#" className="primary-btn">
                            Shop now <span className="arrow_right" />
                          </a>
                          <div className="hero__social">
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fa fa-pinterest" />
                            </a>
                            <a href="#">
                              <i className="fa fa-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: 941 }}>
                <div
                    className="hero__items set-bg"
                    data-setbg="img/hero/hero-1.jpg"
                    style={{ backgroundImage: 'url("img/hero/hero-1.jpg")' }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-5 col-lg-7 col-md-8">
                        <div className="hero__text">
                          <h6>Summer Collection</h6>
                          <h2>Fall - Winter Collections 2030</h2>
                          <p>
                            A specialist label creating luxury essentials. Ethically
                            crafted with an unwavering commitment to exceptional
                            quality.
                          </p>
                          <a href="#" className="primary-btn">
                            Shop now <span className="arrow_right" />
                          </a>
                          <div className="hero__social">
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fa fa-pinterest" />
                            </a>
                            <a href="#">
                              <i className="fa fa-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: 941 }}>
                <div
                    className="hero__items set-bg"
                    data-setbg="img/hero/hero-2.jpg"
                    style={{ backgroundImage: 'url("img/hero/hero-2.jpg")' }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-5 col-lg-7 col-md-8">
                        <div className="hero__text">
                          <h6>Summer Collection</h6>
                          <h2>Fall - Winter Collections 2030</h2>
                          <p>
                            A specialist label creating luxury essentials. Ethically
                            crafted with an unwavering commitment to exceptional
                            quality.
                          </p>
                          <a href="#" className="primary-btn">
                            Shop now <span className="arrow_right" />
                          </a>
                          <div className="hero__social">
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fa fa-pinterest" />
                            </a>
                            <a href="#">
                              <i className="fa fa-instagram" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <button type="button" role="presentation" className="owl-prev">
          <span className="arrow_left">
            <span />
          </span>
            </button>
            <button type="button" role="presentation" className="owl-next">
          <span className="arrow_right">
            <span />
          </span>
            </button>
          </div>
          <div className="owl-dots disabled" />
        </div>
      </section>
  )
}
export default Slider