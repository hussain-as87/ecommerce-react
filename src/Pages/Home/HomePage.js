import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import ProductHomeItemContainer from "../../Components/Product/ProductHomeItemContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeature";
import {GetProducts} from "../../Controllers/ProductController";


const HomePage = () => {
    const {products, loading} = GetProducts();
    return (
        <>
            <>
                {/* Hero Section Begin */}
                <Slider/>
                {/* Hero Section End */}
                {/* Banner Section Begin */}
                <BrandFeatured title="Brands" btn="More"/>
                {/* Banner Section End */}
                {/* Product Section Begin */}
                <ProductHomeItemContainer products={products} loading={loading} path="/products"/>
                {/* Product Section End */}
                {/* Categories Section Begin */}
                <DiscountSection/>
                {/* Categories Section End */}
            </>


            {/*
            <DiscountSection/>
            <ProductHomeItemContainer title="Most Products" btn="More" path="/products" products={products}
                                      loading={loading} />
            <BrandFeatured title="Brands" btn="More"/> */}
        </>);
};
export default HomePage;
