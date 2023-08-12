import {Container, Row, Spinner} from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import ProductItem from "./ProductItem";
import React from "react";
import {GetCategories} from "../../Controllers/CategoryController";

const ProductHomeItemContainer = ({title, btn, path, products, loading, exceptID}) => {
   const {categories} = GetCategories()
    return (
        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="filter__controls">
                            <li className="active" data-filter="*">
                            Best Sellers
                        </li>
                            {categories?.data?.slice(0,2).map((category)=>(
                                <li data-filter={`.${category.name}`}>{category.name}</li>
                            ))}

{/*
                            <li data-filter=".hot-sales">Hot Sales</li>
*/}
                        </ul>
                    </div>
                </div>
                <div className="row product__filter" id="MixItUp74A58B">
                    {!loading ? (products?.data?.slice(0,4).map((product) => {
                                if (product._id !== exceptID) {
                                    return <ProductItem product={product} key={product._id}/>
                                }
                            }
                        )) :
                        <div className="text-center"><Spinner
                            animation="border"
                            variant="secondary"
                            style={{width: '100px', height: '100px'}}
                        />
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}
export default ProductHomeItemContainer
