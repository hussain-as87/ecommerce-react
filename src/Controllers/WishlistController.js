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
        productId: productId
    });
    const [isProductInWishlist, setIsProductInWishlist] = useState(false);

    useEffect(() => {
        dispatch(loggedUserWishlistAction());
    }, []); // Empty dependency array ensures this effect is called only once

    const {loggedUserWishlist, wishlist} = useSelector((state) => state.wishlist);

    const handleToggleWishlist = async (e) => {
        e.preventDefault()
        if (isProductInWishlist) {
            // Remove product from wishlist
            await dispatch(removeProductToWishlistAction(productId));
        } else {
            // Add product to wishlist
            await dispatch(addProductToWishlistAction(data));
        }
        // Refresh the wishlist data
        await dispatch(loggedUserWishlistAction());
    };
    useEffect(() => {
        setData((prevData) => ({...prevData, productId: productId}));
        const result = loggedUserWishlist?.data?.some(item => item._id === productId)
        setIsProductInWishlist(result)
    }, [productId, loggedUserWishlist]);
    return {handleToggleWishlist, isProductInWishlist, loggedUserWishlist};
};

export default ProductWishlist;
