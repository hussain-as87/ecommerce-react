import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../../Redux/Actions/ProductAction";
import use_notification from "../../use_notification";
import IndexCategoryForm from "../../Category/IndexCategoryForm";
import IndexBrandForm from "../../Brand/IndexBrandForm";
import { getSpecificSubcategories } from "../../../Redux/Actions/SubcategoryAction";
import ShowProductForm from "../ShowProductForm";

const EditProductForm = ({ id }) => {
    const dispatch = useDispatch();
    const { product } = ShowProductForm(id); // Retrieve the product data using the provided ID
    const productData = product ? product.data : []; // Extract the data from the product, or set it as an empty array if not available

    // State variables
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const [colorPickerShow, setColorPickerShow] = useState(false);
    const [colors, setColors] = useState([]);
    const [subcategoryOptions, setSubcategoryOptions] = useState([]);
    const [selectedSubcategoryOptions, setSelectedSubcategoryOptions] = useState([]);
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

    const response = useSelector((state) => state.products.ProductE);
    const { categories } = IndexCategoryForm();
    const { brands } = IndexBrandForm();

    // Retrieve subcategories from the Redux store
    const { subcategories } = useSelector((state) => state.subcategories);

    // Add color to the colors array
    const handleCreateColors = (color) => {
        if (colors.includes(color.hex)) {
            setColorPickerShow(!colorPickerShow);
            return;
        }
        setColors((prevColors) => [...prevColors, color.hex]);
        setColorPickerShow(!colorPickerShow);
    };

    // Remove color from the colors array
    const handleRemoveColors = (color) => {
        const newColors = colors.filter((c) => c !== color);
        setColors(newColors);
    };

    const crop = {
        unit: "%",
        aspect: 4 / 3,
        width: "100",
    };

    // Update the data state based on input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleTitleChange = (e) => {
        setData((prevData) => ({ ...prevData, title: e.target.value }));
    };

    const handleDescriptionChange = (e) => {
        setData((prevData) => ({ ...prevData, description: e.target.value }));
    };

    const handlePriceChange = (e) => {
        setData((prevData) => ({ ...prevData, price: e.target.value }));
    };

    const handleQuantityChange = (e) => {
        setData((prevData) => ({ ...prevData, quantity: e.target.value }));
    };

    const handleCategoryChange = async (e) => {
        setData((prevData) => ({ ...prevData, category: e.target.value }));
        if (e.target.value !== "") {
            try {
                await dispatch(getSpecificSubcategories(e.target.value));
                setData((prevData) => ({ ...prevData, subCategory: [] }));
            } catch (err) {
                console.log("Error fetching subcategories:", err);
            }
        }
    };

    useEffect(() => {
        if (data.category) {
            const run = async () => {
                await dispatch(getSpecificSubcategories(data.category));
            };
            run();
        }
    }, [data.category, dispatch]);

    useEffect(() => {
        if (data.category) {
            if (subcategories.data) {
                setSubcategoryOptions(subcategories.data);
            }
        }
    }, [data.category, subcategories.data]);

    const handleSubcategorySelect = (selectedList) => {
        setSelectedSubcategoryOptions(selectedList)
    };

    const handleSubcategoryRemove = (selectedList) => {
        setSelectedSubcategoryOptions(selectedList)
    };

    const handleBrandChange = (e) => {
        setData((prevData) => ({ ...prevData, brand: e.target.value }));
    };

    // Convert base64 to a File object
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(","),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    // Convert URL to a File object
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {
            title,
            description,
            quantity,
            price,
            category,
            brand,
        } = data;
        const formData = new FormData();
        let imgCover;
        if (images[0].length <= 1000) {
            convertURLtoFile(images[0]).then((val) => (imgCover = val));
        } else {
            imgCover = dataURLtoFile(images[0], Math.random() + ".png");
        }

        let itemImages = [];
        // Convert array of base64 images to File objects
        Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                if (images[index].length <= 1000) {
                    convertURLtoFile(images[index]).then((val) => itemImages.push(val));
                } else {
                    itemImages.push(
                        dataURLtoFile(images[index], Math.random() + ".png")
                    );
                }
            }
        );

        formData.append("title", title);
        formData.append("description", description);
        formData.append("quantity", quantity);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("brand", brand);

        selectedSubcategoryOptions.forEach((subCat) =>
            formData.append("subCategory", subCat._id)
        );
        colors.map((color) => formData.append("colors", color));

        setTimeout(() => {
            formData.append("imageCover", imgCover);
            itemImages.map((item) => formData.append("images", item));
        }, 1000);
        setTimeout(async () => {
            setLoading(true);
            await dispatch(updateProduct({ id, formData }));
            setLoading(false);
            setIsPress(true);
        }, 1000);
    };

    useEffect(() => {
        if (productData) {
            setData((prevState) => ({
                ...prevState,
                title: productData.title,
                description: productData.description,
                quantity: productData.quantity,
                price: productData.price,
                imageCover: productData.imageCover,
                category: productData.category?._id,
                brand: productData.brand?._id,
            }));
            setImages(productData.images || []);
            setColors(productData.colors || []);
            setSelectedSubcategoryOptions(productData.subCategory || []);
        }
        if (!loading) {
            setImages([]);
            setColors([]);
            setSelectedSubcategoryOptions([]);
            setTimeout(() => setIsPress(false), 2000);
            setLoading(true);
            if (response.status === 200) {
                dispatch(getProduct(id));
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
                use_notification(
                    "The product has been created successfully!",
                    "success"
                );
            } else {
                use_notification("There are data required!", "error");
            }
        }
    }, [loading, dispatch, response, productData, id]);

    return {
        data,
        handleInputChange,
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

export default EditProductForm;
