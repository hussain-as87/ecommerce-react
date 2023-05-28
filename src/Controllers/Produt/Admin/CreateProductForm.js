import {useEffect, useState} from "react";
import avatar from "../../../assets/images/avatar.png";
import {useDispatch, useSelector} from "react-redux";
import {createProduct} from "../../../Redux/Actions/ProductAction";
import use_notification from "../../use_notification";
import IndexCategoryForm from "../../Category/IndexCategoryForm";
import IndexBrandForm from "../../Brand/IndexBrandForm";
import {getSpecificSubcategories} from "../../../Redux/Actions/SubcategoryAction";

const CreateProductForm = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const [colorPickerShow, setColorPickerShow] = useState(false);
    const [colors, setColors] = useState([]);
    const [data, setData] = useState({
        title: "",
        description: "",
        quantity: 0,
        price: 0,
        colors: [],
        imageCover: "",
        images: images,
        category: "",
        subCategory: [],
        brand: "",
    });

    const dispatch = useDispatch();
    const response = useSelector((state) => state.products.products);
    const { categories } = IndexCategoryForm();
    const { brands } = IndexBrandForm();
    const { subcategories } = useSelector((state) => state.subcategories);

    const handleCreateColors = (color) => {
        setColors((prevColors) => [...prevColors, color.hex]);
        setColorPickerShow(!colorPickerShow);
    };

    const crop = {
        unit: "%",
        aspect: 4 / 3,
        width: "100",
    };

    const handleTitleChange = (e) => {
        setData({ ...data, title: e.target.value });
    };

    const handleDescriptionChange = (e) => {
        setData({ ...data, description: e.target.value });
    };

    const handlePriceChange = (e) => {
        setData({ ...data, price: e.target.value });
    };

    const handleQuantityChange = (e) => {
        setData({ ...data, quantity: e.target.value });
    };

    const handleCategoryChange = (e) => {
        setData({ ...data, category: e.target.value });
    };

    const handleSubcategorySelect = (selectedList, selectedItem) => {
        setData({ ...data, subCategory: selectedList });
    };

    const handleSubcategoryRemove = (selectedList, removedItem) => {
        setData({ ...data, subCategory: selectedList });
    };

    const handleBrandChange = (e) => {
        setData({ ...data, brand: e.target.value });
    };


    // Convert base64 to file
    const dataURLtoFile = (dataURL, filename) => {
        const arr = dataURL.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        const n = bstr.length;
        const u8arr = new Uint8Array(n);
        for (let i = 0; i < n; i++) {
            u8arr[i] = bstr.charCodeAt(i);
        }

        return new File([u8arr], filename, { type: mime });
    };

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
        } = data
        //convert base 64 image to file
        const imgCover = dataURLtoFile(images[0], Math.random() + ".png")
        //convert array of base 64 image to file
        const itemImages = Array.from(Array(images.length).keys()).map(
            (item, index) => {
                return dataURLtoFile(images[index], Math.random() + ".png");
            }
        );
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("quantity", quantity);
        formData.append("price", price);
        formData.append("imageCover", imgCover);
        formData.append("category", category);
        formData.append("brand", brand);
        subCategory.map((subCat) => formData.append(`subCategory`, subCat));
        itemImages.map((image) => formData.append(`images`, image));
        colors.forEach((color) => formData.append("colors", JSON.stringify(color)));

        try {
            await dispatch(createProduct(formData));
            console.log(response.status)
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
        if (data.category !== "") {
            dispatch(getSpecificSubcategories(data.category));
        }
        if (!loading) {
            setImages([]);
            setTimeout(() => setIsPress(false), 2000);
            setLoading(true);
            if (response.status === 201) {
                setData({
                    title: "",
                    description: "",
                    quantity: 0,
                    price: 0,
                    colors: [],
                    imageCover: avatar,
                    images: [],
                    category: "",
                    subCategory: [],
                    brand: "",
                });
                use_notification("The product has been created successfully! 😀", "success");
            } else {
                use_notification("There are data required! 😔", "error");
            }
        }
    }, [loading, dispatch, data, response]);

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
        subcategories,
        setColorPickerShow,
        handleSubmit,
        images,
        isPress,
        removeColor,
        brands,
        categories,
        colorPickerShow,
        handleCreateColors,
        colors,
    };
};

export default CreateProductForm;