import React from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { useParams } from "react-router-dom";

import add from "../../../assets/images/add.png";
import EditProductForm from "../../../Controllers/Product/Admin/EditProductForm";

const AdminEditProduct = () => {
    const { id } = useParams();

    // Destructure the values and functions from EditProductForm
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
        handleInputChange,
        handleTitleChange,
        handleDescriptionChange,
        handlePriceChange,
        handleQuantityChange,
        handleCategoryChange,
        handleSubcategorySelect,
        handleSubcategoryRemove,
        handleBrandChange,
    } = EditProductForm({ id });

    // Handle any error that occurs during image handling
    const handleError = (e) => console.log(e);

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="justify-content-start">
                {/* Display the product title for editing */}
                <div className="admin-content-text pb-4">
                    Edit product: <b style={{ color: "#5591ef" }}>{data.title}</b>
                </div>
                <Col sm={8}>
                    {/* Display the images gallery of the product */}
                    <div className="text-form pb-2">The images gallery of the product</div>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme="light"
                        max={6}
                        handleError={handleError}
                        allowCrop={false}
                        cropConfig={{ crop, ruleOfThirds: true }}
                    />
                    {/* Input field for the product title */}
                    <input
                        className="input-form d-block mt-3 px-3"
                        type="text"
                        placeholder="Title"
                        value={data.title}
                        onChange={handleTitleChange}
                    />
                    {/* Textarea for the product description */}
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows={4}
                        cols={50}
                        placeholder="Description"
                        value={data.description}
                        onChange={handleDescriptionChange}
                    />
                    {/* Input field for the product price */}
                    <input
                        className="input-form d-block mt-3 px-3"
                        type="number"
                        placeholder="Price"
                        value={data.price}
                        onChange={handlePriceChange}
                    />
                    {/* Input field for the available quantity of the product */}
                    <input
                        className="input-form d-block mt-3 px-3"
                        type="number"
                        placeholder="Available quantity"
                        value={data.quantity}
                        onChange={handleQuantityChange}
                    />
                    {/* Dropdown for selecting the product category */}
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
                    {/* Multiselect for selecting the product subcategories */}
                    <Multiselect
                        className="select input-form-area mt-3"
                        placeholder={subcategoryOptions.length < 1 ? "Subcategory" : ""}
                        options={subcategoryOptions || []}
                        /*selectedValues={data.subCategory}*/
                        onSelect={handleSubcategorySelect}
                        onRemove={handleSubcategoryRemove}
                        displayValue="name"
                        selectionLimit={4}
                        style={{ color: "red" }}
                    />

                    {/* Dropdown for selecting the product brand */}
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

                    {/* Display the available colors of the product */}
                    <div className="text-form mt-3">Available colors of the product</div>
                    <div className="mt-1 d-flex">
                        {/* Render the selected colors */}
                        {colors.length > 0 &&
                            colors.map((co, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleRemoveColors(co)}
                                    className="color ms-2 border mt-1"
                                    style={{ backgroundColor: co }}
                                ></div>
                            ))}
                        {/* Show color picker when the add button is clicked */}
                        <img
                            src={add}
                            alt=""
                            onClick={setColorPickerShow}
                            width="30px"
                            height="35px"
                            style={{ cursor: "pointer" }}
                            className="color ms-2 mt-1"
                        />
                        {/* Render the color picker component */}
                        {colorPickerShow && <CompactPicker onChangeComplete={handleCreateColors} />}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={8} className="d-flex justify-content-end">
                    {/* Submit button for saving the changes */}
                    <Button variant="outline-primary" className="d-inline mt-2" type="submit">
                        Submit
                        {/* Display a spinner while the form is being submitted */}
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
