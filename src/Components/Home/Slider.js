import {Carousel} from "react-bootstrap";
import sliderimg from "../../assets/images/slider1.png";
import slider4 from "../../assets/images/slider4.png";
import prod3 from "../../assets/images/prod3.png";
import hero1 from "../../assets/images/hero/hero-1.jpg";
import hero2 from "../../assets/images/hero/hero-2.jpg";
import {useState} from "react";
const Slider = () => {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="slider-background" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img
                style={{ height: "400px", width: "313.53px" }}
                className=""
                src={hero1}
                alt="First slide"
            />
            <div className="">
              <h3 className="slider-title">هناك خصم كبير</h3>
              <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slider-background2" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img
                style={{ height: "400px", width: "313.53px" }}
                className=""
                src={hero1}
                alt="First slide"
            />
            <div className="">
              <h3 className="slider-title">هناك خصم كبير</h3>
              <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className="slider-background3" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img
                style={{ height: "400px", width: "373.53px" }}
                className=""
                src={hero2}
                alt="First slide"
            />
            <div className="">
              <h3 className="slider-title">هناك خصم كبير</h3>
              <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className="slider-background4" interval={2000}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img
                style={{ height: "400px", width: "373.53px" }}
                className=""
                src={hero1}
                alt="First slide"
            />
            <div className="">
              <h3 className="slider-title">هناك خصم كبير</h3>
              <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
  )
}
export default Slider