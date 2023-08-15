import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import ProductHomeItemContainer from "../../Components/Product/ProductHomeItemContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeature";
import {GetProducts} from "../../Controllers/ProductController";
import {GetCategories} from "../../Controllers/CategoryController";


const HomePage = () => {
    const {products, loading} = GetProducts();
    const {categories} = GetCategories()
    return (<>
                {/* Hero Section Begin */}
                <Slider/>
                {/* Hero Section End */}
                {/* Banner Section Begin */}
                <BrandFeatured title="Brands" btn="More"/>
                {/* Banner Section End */}
                {/* Product Section Begin */}
                <section className="product spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="filter__controls">
                                    <li className="active" data-filter="*">
                                        Best Sellers
                                    </li>
                                    {categories?.data?.slice(0, 2).map((category) => (
                                        <li data-filter={`.${category.name}`}>{category.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <ProductHomeItemContainer products={products} loading={loading} path="/shop"/>
                    </div>
                </section>
                {/* Product Section End */}
                {/* Categories Section Begin */}
                <DiscountSection/>
                {/* Categories Section End */}

        </>);
};
export default HomePage;
