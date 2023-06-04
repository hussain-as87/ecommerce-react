import React from "react";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {Multiselect} from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import {CompactPicker} from "react-color";
import CreateProductForm from "../../../Controllers/Product/Admin/CreateProductForm";

import add from "../../../assets/images/add.png";

const AdminCreateProduct = () => {
    const {
        brands,
        categories,
        colorPickerShow,
        setColorPickerShow,
        colors,
        data,
        handleCreateColors,
        handleSubmit,
        images,
        handleRemoveColors,
        isPress,
        setImages,
        crop,
        subcategoryOptions,
        handleTitleChange,
        handleDescriptionChange,
        handlePriceChange,
        handleQuantityChange,
        handleCategoryChange,
        handleSubcategorySelect,
        handleSubcategoryRemove,
        handleBrandChange,
    } = CreateProductForm();
    const handleError = (e) => console.log(e)
    return (
        <Form onSubmit={handleSubmit}>
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">Create new product</div>
                <Col sm={8}>
                    <div className="text-form pb-2">The images gallery of the product</div>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme="light"
                        max={6}
                        handleError={handleError}
                        allowCrop={false}
                        cropConfig={{crop, ruleOfThirds: true}}
                    />
                    <input
                        className="input-form d-block mt-3 px-3"
                        type="text"
                        placeholder="Title"
                        value={data.title}
                        onChange={handleTitleChange}
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows={4}
                        cols={50}
                        placeholder="Description"
                        value={data.description}
                        onChange={handleDescriptionChange}
                    />
                    <input
                        className="input-form d-block mt-3 px-3"
                        type="number"
                        placeholder="Price"
                        value={data.price}
                        onChange={handlePriceChange}
                    />
                    <input
                        className="input-form d-block mt-3 px-3"
                        type="number"
                        placeholder="Available quantity"
                        value={data.quantity}
                        onChange={handleQuantityChange}
                    />
                    <select
                        id="category"
                        name="category"
                        value={data.category}
                        onChange={handleCategoryChange}
                        className="select input-form-area mt-3 px-2"
                    >
                        <option value="val">Choose category</option>
                        {Array.isArray(categories.data) &&
                            categories.data.map((cate) => (
                                <option value={cate._id} key={cate._id}>
                                    {cate.name}
                                </option>
                            ))}
                    </select>
                    <Multiselect
                        className="select input-form-area mt-3"
                        placeholder={subcategoryOptions.length < 1 ? "Subcategory" : ""}
                        options={Array.isArray(subcategoryOptions) ? subcategoryOptions : []}
                        selectedValues={data.subCategory}
                        onSelect={handleSubcategorySelect}
                        onRemove={handleSubcategoryRemove}
                        displayValue="name"
                        selectionLimit={4}
                        style={{color: "red"}}
                    />
                    <select
                        name="brand"
                        id="brand"
                        value={data.brand}
                        onChange={handleBrandChange}
                        className="select input-form-area mt-3 px-2"
                    >
                        <option value="val">Choose brand</option>
                        {Array.isArray(brands.data) &&
                            brands.data.map((cate) => (
                                <option value={cate._id} key={cate._id}>
                                    {cate.name}
                                </option>
                            ))}
                    </select>
                    <div className="text-form mt-3">Available colors of the product</div>
                    <div className="mt-1 d-flex">
                        {colors.length > 0 &&
                            colors.map((co, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleRemoveColors(co)}
                                    className="color ms-2 border mt-1"
                                    style={{backgroundColor: co}}
                                ></div>
                            ))}
                        <img
                            src={add}
                            alt=""
                            onClick={setColorPickerShow}
                            width="30px"
                            height="35px"
                            style={{cursor: "pointer"}}
                            className="color ms-2 mt-1"
                        />
                        {colorPickerShow && <CompactPicker onChangeComplete={handleCreateColors}/>}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={8} className="d-flex justify-content-end">
                    <Button variant="outline-primary" className="d-inline mt-2" type="submit">
                        Submit
                        {isPress && (
                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
                        )}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default AdminCreateProduct;
