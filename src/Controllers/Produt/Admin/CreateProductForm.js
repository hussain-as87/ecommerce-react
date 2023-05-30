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
    const [colorPickerShow, setColorPickerShow] = useState(false);
    const [colors, setColors] = useState([]);
    const [subcategoryOptions, setSubcategoryOptions] = useState([]);

    const [data, setData] = useState({
        title: "",
        description: "",
        quantity: 0,
        price: 0,
        colors: [],
        imageCover: "",
        images: [],
        category: "",
        subCategory: [],
        brand: "",
    });

    const response = useSelector((state) => state.products.products);
    const {categories} = IndexCategoryForm();
    const {brands} = IndexBrandForm();
    const {subcategories} = useSelector((state) => state.subcategories);

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
        if (data.category !== "") {
            if (subcategories.data) {
                setSubcategoryOptions(subcategories.data);
            }
        }
    }, [data.category, subcategories.data]);

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

        // Convert base64 image to file
        const imgCover = dataURLtoFile(images[0], Math.random() + ".png");

        // Convert array of base64 images to files
        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                return dataURLtoFile(images[index], Math.random() + ".png")
            }
        )
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("quantity", quantity);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("brand", brand);
        subCategory.forEach((subCat) =>
            formData.append("subCategory", subCat._id)
        );
        formData.append("imageCover", imgCover);
        itemImages.forEach((image) => formData.append("images", image));
        colors.map((color) => formData.append("colors", color))

        setLoading(true);
        await dispatch(createProduct(formData));
        setLoading(false);
        setIsPress(true);
    };

    useEffect(() => {
        if (!loading) {
            setImages([]);
            setColors([]);
            setSubcategoryOptions([]);
            setTimeout(() => setIsPress(false), 2000);
            setLoading(true);
            if (response.status === 201) {
                setData({
                    title: "",
                    description: "",
                    quantity: 0,
                    price: 0,
                    colors: [],
                    imageCover: "",
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

    }, [loading, dispatch, response]);

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
    };
};

export default CreateProductForm;
