import React from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import CreateProductForm from "../../../Controllers/Product/Admin/CreateProductForm";

import add from "../../../assets/images/add.png";
import EditProductForm from "../../../Controllers/Product/Admin/EditProductForm";
import { useParams } from "react-router-dom";

const AdminEditProduct = () => {
    const { id } = useParams();

    // Destructure the variables and functions from EditProductForm
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
    } = EditProductForm(id);

    console.log(data);

    const handleError = (e) => console.log(e);

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="justify-content-start">
                 {/*Display the product title*/}
                <div className="admin-content-text pb-4">
                    Edit: <b className="text-warning">{data.title}</b>
                </div>
                <Col sm={8}>
                    <div className="text-form pb-2">The images gallery of the product</div>
                    {/* Input for selecting multiple images*/}
                    <MultiImageInput
                        images={images.length > 0 ? images : data.images}
                        setImages={setImages}
                        theme="light"
                        max={6}
                        handleError={handleError}
                        allowCrop={false}
                        cropConfig={{ crop, ruleOfThirds: true }}
                    />


                    {/* Input for the product title*/}
                    <input
                        className="input-form d-block mt-3 px-3"
                        type="text"
                        placeholder="Title"
                        value={data.title}
                        onChange={handleTitleChange}
                    />
                     {/*Textarea for the product description*/}
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows={4}
                        cols={50}
                        placeholder="Description"
                        value={data.description}
                        onChange={handleDescriptionChange}
                    />
                     {/*Input for the product price*/}
                    <input
                        className="input-form d-block mt-3 px-3"
                        type="number"
                        placeholder="Price"
                        value={data.price}
                        onChange={handlePriceChange}
                    />
                     {/*Input for the available quantity*/}
                    <input
                        className="input-form d-block mt-3 px-3"
                        type="number"
                        placeholder="Available quantity"
                        value={data.quantity}
                        onChange={handleQuantityChange}
                    />
                     {/*Dropdown for selecting the category*/}
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
                     {/*Multiselect for selecting subcategories*/}
                    <Multiselect
                        className="select input-form-area mt-3"
                        placeholder={subcategoryOptions && subcategoryOptions.length < 1 ? "Subcategory" : ""}
                        options={Array.isArray(subcategoryOptions) ? subcategoryOptions : []}
                        selectedValues={data.subCategory}
                        onSelect={handleSubcategorySelect}
                        onRemove={handleSubcategoryRemove}
                        displayValue="name"
                        selectionLimit={4}
                        style={{ color: "red" }}
                    />

                     {/*Dropdown for selecting the brand*/}
                    <select
                        name="brand"
                        id="brand"
                        value={data.brand}
                        onChange={handleBrandChange}
                        className="select input-form-area mt-3 px-2"
                    >
                        <option value="val">Choose brand</option>
                        {Array.isArray(brands.data) &&
                            brands.data.map((brand) => (
                                <option value={brand._id} key={brand._id}>
                                    {brand.name}
                                </option>
                            ))}
                    </select>
                    <div className="text-form mt-3">Available colors of the product</div>
                    <div className="mt-1 d-flex">
                        {/* Display the selected colors*/}
                        {colors.length > 0 ? colors : data.colors &&
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
                {/* Submit button */}
                <Col sm={8} className="d-flex justify-content-end">
                    <Button variant="outline-primary" className="d-inline mt-2" type="submit">
                        Submit
                        {/* Display a spinner when submitting */}
                        {isPress && (
                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                        )}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default AdminEditProduct;
