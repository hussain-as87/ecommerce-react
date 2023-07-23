import React, {useEffect, useState} from "react";
import {EditProduct} from "../../../Controllers/ProductController";
import imageFail from "../../../assets/images/image.png"
import {Backspace, Check2Circle, Pen} from "react-bootstrap-icons";
import {Button, Card, FloatingLabel, Form, Modal} from "react-bootstrap";
import MultiImageInput from "react-multiple-image-input";
import {Multiselect} from "multiselect-react-dropdown";
import add from "../../../assets/images/add.png";
import {CompactPicker} from "react-color";

const AdminEditProduct = ({id}) => {
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
        handleSubcategorySelect,
        handleSubcategoryRemove,
        errors,
        showModal,
        setShowModal
    } = EditProduct(id);
    return (<>
        <Pen size={20} className="text-warning" onClick={() => setShowModal(true)}/>

        {showModal && (
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Card className="">
                        <Card.Body>
                            <Card.Title className="">Edit Product</Card.Title>
                            <MultiImageInput
                                images={images}
                                setImages={setImages}
                                theme="light"
                                max={6}
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
                                                  placeholder="the title of the product"
                                                  name="title"
                                                  className={errors.some(error => error.param === "title") && 'is-invalid'}
                                                  onChange={handleInputChange}
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
                                        name="description"
                                        as="textarea"
                                        placeholder="Enter the description"
                                        className={errors.some(error => error.param === "description") && 'is-invalid'}
                                        style={{height: '100px'}}
                                        value={data.description}
                                        onChange={handleInputChange}
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
                                        className={errors.some(error => error.param === "price") && 'is-invalid'}
                                        name="price"
                                        type="number"
                                        placeholder="Price"
                                        value={data.price}
                                        onChange={handleInputChange}
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
                                        className={errors.some(error => error.param === "quantity") && 'is-invalid'}
                                        name="quantity"
                                        type="number"
                                        placeholder="Available quantity"
                                        value={data.quantity}
                                        onChange={handleInputChange}
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
                                        name="category"
                                        value={data.category}
                                        onChange={handleInputChange}
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
                                    className={"" + errors.some(error => error.param === "subcategory") && 'is-invalid'}
                                    placeholder={subcategoryOptions && "Subcategory"}
                                    options={subcategoryOptions.map((subcategory) => ({
                                        name: subcategory.name,
                                        value: subcategory._id,
                                    }))}
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
                                        value={data.brand}
                                        onChange={handleInputChange}
                                        className={errors.some(error => error.param === "brand") && 'is-invalid'}
                                    >
                                        <option value="val">Choose brand</option>
                                        {brands?.data?.map((cate) => (
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
                        </Card.Body>
                    </Card>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
                        <Backspace/>
                    </Button>
                    <Button variant="outline-primary" type="submit" onClick={handleSubmit}>
                        <Check2Circle/>
                    </Button>
                </Modal.Footer>
            </Modal>

        )}
    </>)
}
export default AdminEditProduct