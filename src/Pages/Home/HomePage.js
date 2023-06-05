import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import ProductHomeItemContainer from "../../Components/Product/ProductHomeItemContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeature";
import IndexHomeProductForm from "../../Controllers/Product/IndexHomeProductForm";

const HomePage = () => {
    const {products, loading} = IndexHomeProductForm();

    return (
        <>
            <Slider/>
            <HomeCategory/>
            <ProductHomeItemContainer title="Most Products" btn="More" path="/products" products={products}
                                      loading={loading}/>
            <DiscountSection/>
            <ProductHomeItemContainer title="Most Products" btn="More" path="/products" products={products}
                                      loading={loading}/>
            <BrandFeatured title="Brands" btn="More"/>
        </>);
};
export default HomePage;
