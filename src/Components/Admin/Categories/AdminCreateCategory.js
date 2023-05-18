import React, {useEffect, useState} from "react";
import {Button, Col, Row, Spinner} from "react-bootstrap";
import avatar from "../../../assets/images/avatar.png"
import {useDispatch, useSelector} from "react-redux";
import {createCategory} from "../../../Redux/Actions/CategoryAction";
import {toast} from "react-toastify";

const AdminCreateCategory = () => {
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const dispatch = useDispatch();
    const onChangeImage = (e) => {
        e.preventDefault()
        //when the image is changed
        if (e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }
    const category = useSelector((s) => s.categories.category);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", name)
        formData.append("image", selectedFile)
        await dispatch(createCategory(formData))
        setLoading(false)
        setIsPress(true)
        toast.success('the category has been created successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        console.log(category.data)
    }
    useEffect(() => {
        if (!loading) {
            setName("")
            setImg(avatar)
            setSelectedFile(null)
            setTimeout(() => setIsPress(false), 2000)
            console.log("done!")
            setLoading(true)
        }
    }, [loading])
    return (
        <>
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">Create new Category</div>
                <Col sm={8}>
                    <div className="text-form pb-2">The image of the category</div>
                    <div>
                        <label htmlFor="upload-image">
                            <img
                                src={img}
                                alt="asa"
                                height={100}
                                width={120}
                                style={{cursor: "pointer"}}
                            />
                        </label>
                        <input type="file" name="image" onChange={onChangeImage} id="upload-image"/>
                    </div>
                    <input onChange={(e) => setName(e.target.value)} type="text"
                           className="input-form d-block mt-3 px-3" placeholder="the name pf the category"
                           value={name}/>
                </Col>
            </Row>
            <Row>
                <Col sm={8} className="d-flex justify-content-end">
                    <Button onClick={handleSubmit} variant="outline-primary" className="d-inline mt-2">
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
        </>
    )
}
export default AdminCreateCategory