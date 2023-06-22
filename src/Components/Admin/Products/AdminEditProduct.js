import React from "react";
import {Button, Col, FloatingLabel, Form, Row, Spinner} from "react-bootstrap";
import {Multiselect} from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import {CompactPicker} from "react-color";
import {useParams} from "react-router-dom";

import add from "../../../assets/images/add.png";
import EditProductForm from "../../../Controllers/Product/Admin/EditProductForm";

const AdminEditProduct = () => {
    const {id} = useParams();

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
        errors
    } = EditProductForm({id});

    // Handle any error that occurs during image handling
    const handleError = (e) => console.log(e);

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">Create new product</div>
                <Col sm={8}>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme="light"
                        max={6}
                        handleError={handleError}
                        allowCrop={false}
                        cropConfig={{crop, ruleOfThirds: true}}
                        className={errors.some(error => error.param === "images") && 'is-invalid'}
                    />
                    {errors.some(error => error.param === "images") &&
                        <Form.Text className="text-danger">
                            {errors.find(error => error.param === "images").msg}
                        </Form.Text>}
                    <Form.Group>
                        <FloatingLabel controlId="title" label="Title">
                            <Form.Control type="text"
                                          id="title"
                                          placeholder="the title of the product"
                                          name="name"
                                          className={errors.some(error => error.param === "title") && 'is-invalid'}
                                          onChange={handleTitleChange}
                                          value={data.title}/>
                            {errors.some(error => error.param === "title") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "title").msg}
                                </Form.Text>
                            }
                        </FloatingLabel>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <FloatingLabel controlId="description" label="Description">
                            <Form.Control
                                id="description"
                                as="textarea"
                                placeholder="Enter the description"
                                className={errors.some(error => error.param === "description") && 'is-invalid'}
                                style={{height: '100px'}}
                                value={data.description}
                                onChange={handleDescriptionChange}
                            />
                            {errors.some(error => error.param === "description") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "description").msg}
                                </Form.Text>}
                        </FloatingLabel>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <FloatingLabel controlId="price" label="Price">
                            <Form.Control
                                id="price"
                                className={errors.some(error => error.param === "price") && 'is-invalid'}
                                name="price"
                                type="number"
                                placeholder="Price"
                                value={data.price}
                                onChange={handlePriceChange}
                            />
                            {errors.some(error => error.param === "price") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "price").msg}
                                </Form.Text>}
                        </FloatingLabel>

                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <FloatingLabel controlId="quantity" label="Quantity">
                            <Form.Control
                                id="quantity"
                                className={errors.some(error => error.param === "quantity") && 'is-invalid'}
                                name="quantity"
                                type="number"
                                placeholder="Available quantity"
                                value={data.quantity}
                                onChange={handleQuantityChange}
                            />
                            {errors.some(error => error.param === "quantity") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "quantity").msg}
                                </Form.Text>}
                        </FloatingLabel>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <FloatingLabel controlId="category" label="Category">
                            <Form.Select
                                id="category"
                                name="category"
                                value={data.category}
                                onChange={handleCategoryChange}
                                className={errors.some(error => error.param === "category") && 'is-invalid'}
                            >
                                <option value="val">Choose category</option>
                                {Array.isArray(categories.data) &&
                                    categories.data.map((cate) => (
                                        <option value={cate._id} key={cate._id}>
                                            {cate.name}
                                        </option>
                                    ))}
                            </Form.Select>
                            {errors.some(error => error.param === "category") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "category").msg}
                                </Form.Text>}
                        </FloatingLabel>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Multiselect
                            id="subcategory"
                            className={"form-control select" + errors.some(error => error.param === "subcategory") && 'is-invalid'}
                            placeholder={subcategoryOptions.length < 1 ? "Subcategory" : ""}
                            options={Array.isArray(subcategoryOptions) ? subcategoryOptions : []}
                            selectedValues={data.subCategory}
                            onSelect={handleSubcategorySelect}
                            onRemove={handleSubcategoryRemove}
                            displayValue="name"
                            selectionLimit={4}
                            style={{color: "red", height: '100px'}}
                        />
                        {errors.some(error => error.param === "subcategory") &&
                            <Form.Text className="text-danger">
                                {errors.find(error => error.param === "subcategory").msg}
                            </Form.Text>}
                    </Form.Group>

                    <br/>
                    <Form.Group>
                        <FloatingLabel controlId="brand" label="Brand">
                            <Form.Select
                                name="brand"
                                id="brand"
                                value={data.brand}
                                onChange={handleBrandChange}
                                className={errors.some(error => error.param === "brand") && 'is-invalid'}
                            >
                                <option value="val">Choose brand</option>
                                {Array.isArray(brands.data) &&
                                    brands.data.map((cate) => (
                                        <option value={cate._id} key={cate._id}>
                                            {cate.name}
                                        </option>
                                    ))}
                            </Form.Select>
                            {errors.some(error => error.param === "brand") &&
                                <Form.Text className="text-danger">
                                    {errors.find(error => error.param === "brand").msg}
                                </Form.Text>}
                        </FloatingLabel>
                    </Form.Group>
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

export default AdminEditProduct;
