import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import ProductHomeItemContainer from "../../Components/Product/ProductHomeItemContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeature";
import IndexHomeProductForm from "../../Controllers/Product/IndexHomeProductForm";

const HomePage = () => {
    const {products: homeProducts, loading: homeLoading} = IndexHomeProductForm();

    const {products: soldProducts, loading: soldLoading} = IndexHomeProductForm("-sold")

    return (
        <>
            <Slider/>
            <HomeCategory/>
            <ProductHomeItemContainer title="Most Products" btn="More" path="/products" products={homeProducts}
                                      loading={homeLoading}/>
            <DiscountSection/>
            <ProductHomeItemContainer title="Top Rated Products" btn="More" path="/products" products={soldProducts}
                                      loading={soldLoading}/>
            <BrandFeatured title="Brands" btn="More"/>
        </>);
};
export default HomePage;
