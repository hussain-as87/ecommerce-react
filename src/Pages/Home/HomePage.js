import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import ProductHomeItemContainer from "../../Components/Product/ProductHomeItemContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeature";
import IndexHomeProductForm from "../../Controllers/Product/IndexHomeProductForm";
import IndexHomeTopProductForm from "../../Controllers/Product/IndexHomeTopProductForm";

const HomePage = () => {
    const {products, loading} = IndexHomeProductForm();
    const {TopProducts, TopLoading} = IndexHomeTopProductForm()

    return (
        <>
            <Slider/>
            <HomeCategory/>
            <ProductHomeItemContainer title="Most Products" btn="More" path="/products" products={products}
                                      loading={loading}/>
            <DiscountSection/>
            <ProductHomeItemContainer title="Top Rated Products" btn="More" path="/products" products={TopProducts}
                                      loading={TopLoading}/>
            <BrandFeatured title="Brands" btn="More"/>
        </>);
};
export default HomePage;
