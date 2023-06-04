import {useEffect, useState} from "react";
import avatar from "../../../assets/images/avatar.png";
import {useDispatch, useSelector} from "react-redux";
import use_notification from "../../use_notification";
import {createBrand} from "../../../Redux/Actions/BrandAction";

const CreateBrandForm = () => {
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const dispatch = useDispatch();

    const onChangeImage = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            if (file.size > 1000000) {
                use_notification("The file size is too large! 😔", "error");
                return;
            }
            setImg(URL.createObjectURL(file));
            setSelectedFile(file);
        }
    };
    const response = useSelector(state => state.brands.brands)

    const onChangeName = (e) => {
        e.persist()
        setName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectedFile);

        try {
            await dispatch(createBrand(formData));
            setLoading(false);
            setIsPress(true);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (!loading) {
            setName("");
            setImg(avatar);
            setSelectedFile(null);
            setTimeout(() => setIsPress(false), 2000);
            setLoading(true);
            if (response.status === 201) {
                use_notification("The brand has been created successfully! 😀", "success");
            } else {
                use_notification("The name is required! 😔", "error");
            }
        }
    }, [loading]);

    return {name, onChangeName, img, handleSubmit, isPress, onChangeImage};
};

export default CreateBrandForm;