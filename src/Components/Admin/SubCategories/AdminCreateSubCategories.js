import {Button, Col, Row, Spinner} from "react-bootstrap";
import React from "react";
import CreateSubcategoryForm from "../../../Controllers/Subcategory/Admin/CreateSubcategoryForm";

const AdminCreateSubCategories = () => {
    const {
        name,
        onChangeName,
        category,
        onChangeCategory,
        handleSubmit,
        isPress,
        categories
    } = CreateSubcategoryForm()
    return (<>
        <Row className="justify-content-start">
            <div className="admin-content-text pb-4">Create new subcategory</div>
            <Col sm={8}>
                <input className="input-form d-block mt-3 px-3"
                       value={name}
                       onChange={onChangeName}
                       type="text" placeholder="the name of the subcategory"
                />
                <select id="category" name="category"
                        value={category}
                        onChange={onChangeCategory}
                        className="select input-form-area mt-3 px-2">
                    <option value="">choose the category</option>
                    {categories.data && (categories.data.map((cate) => (
                        <option key={cate._id} value={cate._id}>{cate.name}</option>
                    )))}
                </select>
            </Col>
        </Row>
        <Row>
            <Col sm={8} className="d-flex justify-content-end">
                <Button
                    onClick={handleSubmit}
                    variant="outline-primary"
                    className="d-inline mt-2"
                >
                    Submit
                    {isPress && (<Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />)}
                </Button>
            </Col>
        </Row>
    </>)
}
export default AdminCreateSubCategories