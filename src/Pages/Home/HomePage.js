import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import ProductHomeItemContainer from "../../Components/Product/ProductHomeItemContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeature";
import IndexHomeProductForm from "../../Controllers/Product/IndexHomeProductForm";
import IndexTopSoldProductsForm from "../../Controllers/Product/IndexTopSoldProductsForm";

const HomePage = () => {
    const {products, loading} = IndexHomeProductForm();
    const {soldProducts, loadingS} = IndexTopSoldProductsForm();

    return (
        <>
            <Slider/>
            <HomeCategory/>
            <ProductHomeItemContainer title="Top Sold Products" btn="More" path="/products"
                                      products={soldProducts}
                                      loading={loadingS}/>
            <DiscountSection/>
            <ProductHomeItemContainer title="Most Products" btn="More" path="/products" products={products}
                                      loading={loading}/>
            <BrandFeatured title="Brands" btn="More"/>
        </>);
};
export default HomePage;
