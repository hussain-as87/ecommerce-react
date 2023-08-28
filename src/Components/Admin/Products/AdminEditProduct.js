import React from "react";
import { EditProduct } from "../../../Controllers/ProductController";
import { Check2Circle } from "react-bootstrap-icons";
import {
  Button,
  Card,
  Form,
  Container,
  Spinner,
} from "react-bootstrap";
import MultiImageInput from "react-multiple-image-input";
import { Multiselect } from "multiselect-react-dropdown";
import add from "../../../assets/images/add.png";
import { CompactPicker } from "react-color";
import { useParams } from "react-router-dom";

const AdminEditProduct = () => {
  const { id } = useParams();
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
    selectedSubcategoryOptions,
    errors,
  } = EditProduct(id);
  const handleError = (e) => console.log(e)

  return (
    <Container>
      <Card className="">
        <Card.Body>
          <Card.Title className="">Edit Product: {id}</Card.Title>
          <Form onSubmit={handleSubmit}>
            <MultiImageInput
                images={images}
                setImages={setImages}
                theme="dark"
                max={6}
                handleError={handleError}
                allowCrop={false}
                cropConfig={{crop, ruleOfThirds: true}}
            />
            {errors.some(error => error.param === "imageCover") &&
                <Form.Text className="text-danger">
                  {errors.find(error => error.param === "imageCover").msg}
                </Form.Text>}
            <Form.Group>
              <label htmlFor="title">Title</label>
              <Form.Control
                  id="title"
                  type="text"
                  placeholder="the title of the banner"
                  name="title"
                  className={errors.some(error => error.param === "title") && 'is-invalid'}
                  onChange={handleInputChange}
                  value={data.title}/>
              {errors.some(error => error.param === "title") &&
                  <Form.Text className="text-danger">
                    {errors.find(error => error.param === "title").msg}
                  </Form.Text>
              }
            </Form.Group>
            <br/>
            <Form.Group>
              <label htmlFor="description">Description</label>
              <textarea id="description"
                        placeholder="the description of the banner"
                        name="description"
                        className={`form-control ${errors.some(error => error.param === "description") && 'is-invalid'}`}
                        onChange={handleInputChange}
                        value={data.description}
                        rows="5"></textarea>
              {errors.some(error => error.param === "description") &&
                  <Form.Text className="text-danger">
                    {errors.find(error => error.param === "description").msg}
                  </Form.Text>
              }
            </Form.Group>
            <br/>
            <Form.Group>
              <label htmlFor="price">Price</label>
              <Form.Control
                  id="price"
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
            </Form.Group>
            <br/>
            <Form.Group>
              <label htmlFor="quantity">Quantity</label>
              <Form.Control
                  id="quantity"
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
            </Form.Group>
            <br/>
            <Form.Group>
              <label htmlFor="category">Category</label>
              <Form.Select
                  id="category"
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
            </Form.Group>
            <br/>
            <Form.Group>
              <Multiselect
                  id="subcategory"
                  className={`${errors.some(error => error.param === "subcategory") && 'is-invalid'}` }
                  placeholder={subcategoryOptions.length < 1 && "Subcategory"}
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
              <label htmlFor="brand">Brand</label>
              <Form.Select
                  name="brand"
                  id="brand"
                  value={data.brand}
                  onChange={handleInputChange}
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
            <Button
                type="submit"
                variant="outline-primary"
                className="mt-2 justify-content-end d-flex"
            >
              <Check2Circle size={24}/>
              {isPress && (<Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
              />)}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default AdminEditProduct;
