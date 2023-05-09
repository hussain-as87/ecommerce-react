import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import ProductItemContainer from "../../Components/Product/ProductItemContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandCardItemContainer from "../../Components/Brand/BrandCardItemContainer";

const HomePage = () => {
    return (
        <>
            <Slider/>
            <HomeCategory/>
            <ProductItemContainer title="Most Products" btn="More" path="products"/>
            <DiscountSection/>
            <ProductItemContainer title="Top Rated Products" btn="More" path="products"/>
            <BrandCardItemContainer/>
        </>);
};
export default HomePage;
