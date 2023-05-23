import {Button, Col, Row, Spinner} from "react-bootstrap";
import avatar from '../../../assets/images/avatar.png'
import add from '../../../assets/images/add.png'
import {Multiselect} from "multiselect-react-dropdown";
import MultiImageInput from 'react-multiple-image-input';
import React, {useEffect, useState} from "react";
import use_notification from "../../../Controllers/use_notification";
import {useDispatch, useSelector} from "react-redux";
import {createProduct} from "../../../Redux/Actions/ProductAction";
import {getCategories} from "../../../Redux/Actions/CategoryAction";
import {getBrands} from "../../../Redux/Actions/BrandAction";
import {CompactPicker} from 'react-color'

const AdminCreateProduct = () => {
    const [images, setImages] = useState([]);
    const [imageCover, setImageCover] = useState(avatar);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const dispatch = useDispatch();
    //to show color picker
    const [colorPikerShow, setcolorPikerShow] = useState(false);
    const [colors, setColors] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        quantity: undefined,
        price: undefined,
        priceAfterDiscount: undefined,
        colors: [],
        imageCover: imageCover,
        images: images,
        category: "",
        subCategory: [],
        brand: "",
    });
    const onChangeImageCover = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            if (file.size > 1000000) {
                use_notification("The file size is too large! 😔", "error");
                return;
            }
            setImageCover(URL.createObjectURL(file));
            setSelectedFile(file);
        }
    };

    //handle the colors
    const handleCreateColors = (color) => {
        setColors([...colors, color.hex])
        setcolorPikerShow(!colorPikerShow)
    }
    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
    };
    const onSelect = () => {

    }
    const onRemove = () => {

    }
    const response = useSelector(state => state.products.products)
    const {categories} = useSelector(state => state.categories)
    const {brands} = useSelector(state => state.brands)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", formData.title);

        formData.append("description", formData.description);
        formData.append("quantity", formData.quantity);
        formData.append("price", formData.price);
        formData.append("priceAfterDiscount", formData.priceAfterDiscount);
        formData.append("colors", formData.colors);
        formData.append("imageCover", selectedFile);
        formData.append("images", formData.images);
        formData.append("category", formData.category);
        formData.append("subCategory", formData.subCategory);
        formData.append("brand", formData.brand);

        try {
            await dispatch(createProduct(formData));
            setLoading(false);
            setIsPress(true);
        } catch (error) {
            console.log(error)
        }
    };
    const removeColor = (color) => {
        const newColors = colors.filter((c) => c !== color);
        setColors(newColors);
    };


    useEffect(() => {
        dispatch(getCategories())
        dispatch(getBrands())
        if (!loading) {
            setFormData({});
            setImageCover(avatar);
            setImages([]);
            setSelectedFile(null);
            setTimeout(() => setIsPress(false), 2000);
            setLoading(true);
            if (response.status === 201) {
                use_notification("The product has been created successfully! 😀", "success");
            } else {
                use_notification("The name is required! 😔", "error");
            }
        }
    }, [loading, dispatch]);
    const options = [{name: "subCate 1", id: 425}, {name: "subCate 2", id: 528}, {name: "subCate 3", id: 756}]
    return (<>
        <Row className="justify-content-start">
            <div className="admin-content-text pb-4">Create new product</div>
            <Col sm={8}>
                <div className="text-form pb-2">the main image of the product</div>
                <div>
                    <label htmlFor="upload-image">
                        <img
                            src={imageCover}
                            alt="asa"
                            className="align-items-center"
                            height={100}
                            width={120}
                            style={{cursor: "pointer"}}
                        />
                    </label>
                    <input type="file" name="image" onChange={onChangeImageCover} id="upload-image"/>
                </div>
                <div className="text-form pb-2">the images gallery of the product</div>
                <MultiImageInput
                    images={images}
                    setImages={setImages}
                    theme={{
                        background: '#ffffff',
                        border: '0',
                        borderStyle: "none",
                        borderColor: "transparent",
                        outlineColor: '#111111',
                        textColor: 'rgba(255,255,255,0.6)',
                        buttonColor: '#ff0e1f',
                        modalColor: '#ffffff'
                    }}
                    max={6}
                    cropConfig={{crop, ruleOfThirds: true}}
                />
                <input className="input-form d-block mt-3 px-3"
                       type="text" placeholder="Title" value={formData.title}
                       onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
                <textarea className="input-form-area p-2 mt-3"
                          rows={4} cols={50} placeholder="Description"
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
                <input className="input-form d-block mt-3 px-3"
                       type="text" placeholder="prise before discount"
                       value={formData.price}
                       onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
                <input className="input-form d-block mt-3 px-3"
                       type="text" placeholder="prise after discount"
                />
                <input className="input-form d-block mt-3 px-3"
                       type="text" placeholder="available quantity"
                />
                <select id="category" name="category"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="select input-form-area mt-3 px-2">
                    <option value="val">choose category</option>
                    {categories.data && categories.data.map((cate) => (
                        <option value={cate._id} key={cate._id}>{cate.name}</option>
                    ))}
                </select>
                <Multiselect className="select input-form-area mt-3" placeholder="subCategory" options={options}
                             onSelect={onSelect}
                             onRemove={onRemove}
                             displayValue="name"
                             style={{color: "red"}}/>
                <select
                    name="brand"
                    id="brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({...formData, brand: e.target.value})}
                    className="select input-form-area mt-3 px-2 ">
                    <option value="val">choose brand</option>
                    {brands.data && brands.data.map((cate) => (
                        <option value={cate._id} key={cate._id}>{cate.name}</option>
                    ))}
                </select>
                <div className="text-form mt-3 ">Available colors of the product</div>
                <div className="mt-1 d-flex">
                    {colors.length > 0 && colors.map((co,index) => (<div
                        key={index}
                        onClick={()=>removeColor(co)}
                        className="color ms-2 border  mt-1"
                        style={{backgroundColor: co}}></div>))}

                    <img src={add}
                         alt="" onClick={() => setcolorPikerShow(!colorPikerShow)} width="30px" height="35px"
                         style={{cursor: 'pointer'}}
                         className="color ms-2 mt-1"/>
                    {colorPikerShow && (<CompactPicker onChangeComplete={handleCreateColors}/>)}
                </div>
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
export default AdminCreateProduct