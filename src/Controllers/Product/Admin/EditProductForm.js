import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ShowProductForm from "../ShowProductForm";
import IndexCategoryForm from "../../Category/IndexCategoryForm";
import IndexBrandForm from "../../Brand/IndexBrandForm";
import { getSpecificSubcategories } from "../../../Redux/Actions/SubcategoryAction";
import { updateProduct } from "../../../Redux/Actions/ProductAction";
import use_notification from "../../use_notification";

const EditProductForm = (id) => {
    const dispatch = useDispatch();
    const { productE, loadingE } = useSelector((state) => state.products);

    // Retrieve the product data using the provided ID
    const { product } = ShowProductForm(id);

    // Extract the data from the product, or set it as an empty array if not available
    const productData = product ? product.data : [];

    // State variables
    const [images, setImages] = useState([]);
    const [isPress, setIsPress] = useState(false);
    const [colorPickerShow, setColorPickerShow] = useState(false);
    const [colors, setColors] = useState([]);
    const [subcategoryOptions, setSubcategoryOptions] = useState([]);

    // Form data state
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

    // Retrieve categories and brands
    const { categories } = IndexCategoryForm();
    const { brands } = IndexBrandForm();

    // Retrieve subcategories from the Redux store
    const { subcategories } = useSelector((state) => state.subcategories);

    // Handle the creation of colors
    const handleCreateColors = (color) => {
        if (colors.includes(color.hex)) {
            setColorPickerShow(!colorPickerShow);
            return;
        }
        setColors((prevColors) => [...prevColors, color.hex]);
        setColorPickerShow(!colorPickerShow);
    };

    // Handle the removal of colors
    const handleRemoveColors = (color) => {
        const newColors = colors.filter((c) => c !== color);
        setColors(newColors);
    };

    // Crop settings for image
    const crop = {
        unit: "%",
        aspect: 4 / 3,
        width: "100",
    };

    // Handle input change for generic fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle category change
    const handleCategoryChange = async (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, category: value }));

        if (value !== "") {
            try {
                await dispatch(getSpecificSubcategories(value || product.data.category._id));
            } catch (err) {
                console.log("Error fetching subcategories:", err);
            }
        }
    };

    // Handle subcategory selection
    const handleSubcategorySelect = (selectedList) => {
        setData((prevData) => ({ ...prevData, subCategory: selectedList }));
    };

    // Handle subcategory removal
    const handleSubcategoryRemove = (selectedList) => {
        setData((prevData) => ({ ...prevData, subCategory: selectedList }));
    };

    // Handle brand change
    const handleBrandChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, brand: value }));
    };

    // Convert base64 image to file
    function dataURLtoFile(dataUrl, filename) {
        const arr = dataUrl.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

    // Handle form submission
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
        const itemImages = images.map((image, index) =>
            dataURLtoFile(image, Math.random() + ".png")
        );

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("quantity", quantity);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("brand", brand);
        subCategory.forEach((subCat) => formData.append("subCategory", subCat._id));
        formData.append("imageCover", imgCover);
        itemImages.forEach((image) => formData.append("images", image));
        colors.forEach((color) => formData.append("colors", color));

        await dispatch(updateProduct({ id: id, formData: formData }));
        setIsPress(true);
    };

    useEffect(() => {
        // Update form data with default values from productData
        if (productData) {
            setData((prevData) => ({
                ...prevData,
                title: productData.title,
                description: productData.description,
                quantity: productData.quantity,
                price: productData.price,
                colors: productData.colors,
                imageCover: productData.imageCover,
                images: productData.images,
                category: productData.category?._id,
                subCategory: productData.subCategory,
                brand: productData.brand?._id,
            }));
           /* setImages(productData.images)
            setColors(productData.colors)*/
        }
        // Update subcategory options
        if (data.category !== "") {
            if (subcategories.data) {
                setSubcategoryOptions(subcategories.data);
            }
        }
    }, [productData, subcategories.data, data.category]);

    useEffect(() => {
        if (!loadingE) {
            setImages([]);
            setColors([]);
            setSubcategoryOptions([]);
            setIsPress(false);

            if (productE && productE.status === 201) {
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
            }
        }
    }, [loadingE, dispatch, productE]);

    return {
        data,
        handleInputChange,
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
        product,
    };
};

export default EditProductForm;
