import {useEffect, useState} from "react";
import avatar from "../../../assets/images/avatar.png";
import {useDispatch, useSelector} from "react-redux";
import {createCategory} from "../../../Redux/Actions/CategoryAction";
import use_notification from "../../use_notification";

const CreateCategoryForm = () => {
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

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
    const response = useSelector(state => state.categories.create)
    const {create_error} = useSelector((state) => state.categories)
    const onChangeName = (e) => {
        e.preventDefault()
        setName(e.target.value);
        setErrors([])
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectedFile);

        try {
            await dispatch(createCategory(formData));
            setLoading(false);
            setIsPress(true);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (create_error.data?.errors) {
            console.log(create_error.data.errors); // Validation errors will be in the response data
            setErrors(create_error.data.errors); //set errors with response data
            setIsPress(false)
        }
        if (!loading) {
            if (response.status === 201) {
                setName("");
                setImg(avatar);
                setSelectedFile(null);
                setTimeout(() => setIsPress(false), 2000);
                setLoading(true);
                use_notification("The category has been created successfully! 😀", "success");
            }
        }
    }, [loading, response, create_error]);

    return {name, onChangeName, img, handleSubmit, isPress, onChangeImage, errors};
};

export default CreateCategoryForm;
