import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createProduct} from "../../../Redux/Actions/ProductAction";
import use_notification from "../../use_notification";
import IndexCategoryForm from "../../Category/IndexCategoryForm";
import IndexBrandForm from "../../Brand/IndexBrandForm";
import {getSpecificSubcategories} from "../../../Redux/Actions/SubcategoryAction";

const CreateProductForm = () => {
    const dispatch = useDispatch();

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const [errors, setErrors] = useState([]);

    const [colorPickerShow, setColorPickerShow] = useState(false);
    const [colors, setColors] = useState([]);
    const [subcategoryOptions, setSubcategoryOptions] = useState([]);

    const [data, setData] = useState({
        title: "",
        description: "",
        quantity: "",
        price: "",
        colors: [],
        imageCover: "",
        images: [],
        category: "",
        subCategory: [],
        brand: "",
    });

    const response = useSelector((state) => state.products.create);
    const {categories} = IndexCategoryForm();
    const {brands} = IndexBrandForm();
    const {subcategories} = useSelector((state) => state.subcategories);
    const {create_error} = useSelector((state) => state.products)
    const handleCreateColors = (color) => {
        if (colors.includes(color.hex)) {
            setColorPickerShow(!colorPickerShow);
            return;
        }
        setColors((prevColors) => [...prevColors, color.hex]);
        setColorPickerShow(!colorPickerShow);
    };

    const handleRemoveColors = (color) => {
        const newColors = colors.filter((c) => c !== color);
        setColors(newColors);
    };

    const crop = {
        unit: "%",
        aspect: 4 / 3,
        width: "100",
    };

    const handleTitleChange = (e) => {
        setData((prevData) => ({...prevData, title: e.target.value}));
    };

    const handleDescriptionChange = (e) => {
        setData((prevData) => ({...prevData, description: e.target.value}));
    };

    const handlePriceChange = (e) => {
        setData((prevData) => ({...prevData, price: e.target.value}));
    };

    const handleQuantityChange = (e) => {
        setData((prevData) => ({...prevData, quantity: e.target.value}));
    };

    const handleCategoryChange = async (e) => {
        setData((prevData) => ({...prevData, category: e.target.value}));
        if (e.target.value !== "") {
            try {
                await dispatch(getSpecificSubcategories(e.target.value));
            } catch (err) {
                console.log("Error fetching subcategories:", err);
            }
        }
    };

    useEffect(() => {
        if (data?.category !== "") {
            if (subcategories?.data) {
                setSubcategoryOptions(subcategories.data);
            }
        }
    }, [data?.category, subcategories?.data]);

    const handleSubcategorySelect = (selectedList) => {
        setData((prevData) => ({
            ...prevData,
            subCategory: selectedList,
        }));
    };

    const handleSubcategoryRemove = (selectedList) => {
        setData((prevData) => ({
            ...prevData,
            subCategory: selectedList,
        }));
    };

    const handleBrandChange = (e) => {
        setData((prevData) => ({...prevData, brand: e.target.value}));
    };

    // Convert base64 to file
    function dataURLtoFile(dataUrl, filename) {
        const arr = dataUrl.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type: mime});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {
            title,
            description,
            quantity,
            price,
            category,
            subCategory,
            brand,
        } = data;
        const formData = new FormData();

        if (images > 0) { // Convert base64 image to file
            const imgCover = dataURLtoFile(images[0], Math.random() + ".png");

            // Convert array of base64 images to files
            const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
                (item, index) => {
                    return dataURLtoFile(images[index], Math.random() + ".png")
                }
            )
            formData.append("imageCover", imgCover);
            itemImages.forEach((image) => formData.append("images", image));
            return
        }

        formData.append("title", title);
        formData.append("description", description);
        formData.append("quantity", quantity);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("brand", brand);
        subCategory.forEach((subCat) =>
            formData.append("subCategory", subCat._id)
        );
        colors.map((color) => formData.append("colors", color))

        setLoading(true);
        await dispatch(createProduct(formData));
        setLoading(false);
        setIsPress(true);
    };

    useEffect(() => {
        if (create_error.data?.errors) {
            console.log(create_error.data.errors); // Validation errors will be in the response data
            setErrors(create_error.data.errors); //set errors with response data
            setIsPress(false)
        }
        if (!loading) {
            if (response.status === 201) {
                setImages([]);
                setColors([]);
                setSubcategoryOptions([]);
                setTimeout(() => setIsPress(false), 2000);
                setLoading(true);
                setData({
                    title: "",
                    description: "",
                    quantity: "",
                    price: "",
                    colors: [],
                    imageCover: "",
                    images: [],
                    category: "",
                    subCategory: [],
                    brand: "",
                });
                use_notification("The product has been created successfully! 😀", "success");
            }
        }

    }, [loading, dispatch, response, create_error]);

    return {
        data,
        handleTitleChange,
        handleDescriptionChange,
        handlePriceChange,
        handleQuantityChange,
        handleCategoryChange,
        handleSubcategorySelect,
        handleSubcategoryRemove,
        handleBrandChange,
        setImages,
        crop,
        subcategoryOptions,
        setColorPickerShow,
        handleSubmit,
        images,
        isPress,
        handleRemoveColors,
        brands,
        categories,
        colorPickerShow,
        handleCreateColors,
        colors,
        errors
    };
};

export default CreateProductForm;
