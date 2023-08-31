import {GetBanners} from "../../Controllers/BannerController";
import {Carousel} from "react-bootstrap";
import {useState} from "react";

const Slider = () => {
    const {banners} = GetBanners()
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <section className="hero">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {banners?.data?.slice(0,6).map((banner) => (
                    <Carousel.Item className="slider-background" interval={2000} style={{width: '100%'}} key={banner._id}>
                        <div className="owl-item cloned" style={{width: '100%'}}>
                            <div
                                className="hero__items set-bg"
                                data-setbg={banner.image}
                                style={{backgroundImage: `url(${banner.image})`}}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-5 col-lg-7 col-md-8">
                                            <div className="">
                                                <h6>{banner.subtitle}</h6>
                                                <h2>{banner.title}</h2>
                                                <p>{banner.summary}</p>
                                                <a href="#" className="primary-btn">
                                                    Shop now <span className="arrow_right"/>
                                                </a>
                                                <div className="hero__social">
                                                    <a href="#">
                                                        <i className="fa fa-facebook"/>
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-twitter"/>
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-pinterest"/>
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-instagram"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    )
}
export default Slider
