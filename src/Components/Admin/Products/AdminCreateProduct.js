import {Button, Col, Row} from "react-bootstrap";
import avatar from '../../../assets/images/avatar.png'
import add from '../../../assets/images/add.png'
import {Multiselect} from "multiselect-react-dropdown";

const AdminCreateProduct = () => {
    const onSelect = () => {

    }
    const onRemove = () => {

    }
    const options = [{name: "subCate 1", id: 425}, {name: "subCate 2", id: 528}, {name: "subCate 3", id: 756}]
    return (<>
        <Row className="justify-content-start">
            <div className="admin-content-text pb-4">Create new product</div>
            <Col sm={8}>
                <div className="text-form pb-2">the image od the product</div>
                <img src={avatar} width="120px" height="100px" alt="avatar"/>
                <input className="input-form d-block mt-3 px-3"
                       type="text" placeholder="the name of the product"
                />
                <textarea className="input-form-area p-2 mt-3"
                          rows={4} cols={50} placeholder="the describe of the product"
                />
                <input className="input-form d-block mt-3 px-3"
                       type="text" placeholder="the prise of the product before discount"
                />
                <input className="input-form d-block mt-3 px-3"
                       type="text" placeholder="the prise of the product after discount"
                />
                <select id="category" name="category" className="select input-form-area mt-3 px-2">
                    <option value="val">cate 1</option>
                    <option value="val">cate 2</option>
                    <option value="val">cate 3</option>
                </select>
                <Multiselect className="mt-2 text-end" placeholder="subCategory" options={options}  onSelect={onSelect}
                             onRemove={onRemove}
                             displayValue="name"
                             style={{ color: "red" }}/>
                <select
                    name="brand"
                    id="brand"
                    className="select input-form-area mt-3 px-2 ">
                    <option value="val">brand</option>
                    <option value="val2">brad 1</option>
                    <option value="val2">brad 2</option>
                    <option value="val2">brad 3</option>
                </select>
                <div className="text-form mt-3 ">Available colors of the product</div>
                <div className="mt-1 d-flex">
                    <div
                        className="color ms-2 border  mt-1"
                        style={{ backgroundColor: "#E52C2C" }}></div>
                    <div
                        className="color ms-2 border mt-1 "
                        style={{ backgroundColor: "white" }}></div>
                    <div
                        className="color ms-2 border  mt-1"
                        style={{ backgroundColor: "black" }}></div>
                    <img src={add} alt="" width="30px" height="35px" />
                </div>
            </Col>
        </Row>
        <Row>
            <Col sm={8} className="d-flex justify-content-end">
                <Button variant="outline-primary" className="d-inline mt-2">Submit the updates</Button>
            </Col>
        </Row>
    </>)
}
export default AdminCreateProduct