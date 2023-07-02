import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    addProductToWishlistAction,
    loggedUserWishlistAction,
    removeProductToWishlistAction,
} from "../Redux/Actions/WishlistAction";

const ProductWishlist = ({productId}) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        productId: productId,
    });
    const [isProductInWishlist, setIsProductInWishlist] = useState(false);
    useEffect(() => {
        dispatch(loggedUserWishlistAction());
    }, [productId])
    const {loggedUserWishlist} = useSelector((state) => state.wishlist);
    const result = loggedUserWishlist?.data?.some((item) => item._id === productId);

    const handleToggleWishlist = async (e) => {
        e.preventDefault();
        setIsProductInWishlist(!isProductInWishlist);
        if (isProductInWishlist) {
            // Remove product from wishlist
            await dispatch(removeProductToWishlistAction(productId));
        } else {
            // Add product to wishlist
            await dispatch(addProductToWishlistAction(data));
        }

    };

    useEffect(() => {
        setData((prevData) => ({...prevData, productId: productId}));
        setIsProductInWishlist(result);
    }, [dispatch, result, productId]);


    return {handleToggleWishlist, isProductInWishlist, loggedUserWishlist};
};

export default ProductWishlist;
