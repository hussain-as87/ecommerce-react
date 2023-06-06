import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {destroyProduct, getProducts} from "../../Redux/Actions/ProductAction";
import {confirmAlert} from "react-confirm-alert";
import use_notification from "../use_notification";
import {toast} from "react-toastify";

const DestroyProductForm = (id) => {
    const dispatch = useDispatch();
    const {productD, loadingD} = useSelector((state) => state.products);

    const deleteHandler = (e) => {
        e.preventDefault()
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure you want to delete this product?",
            buttons: [
                {
                    label: "Yes",
                    onClick: async () => {
                        await dispatch(destroyProduct(id));
                        use_notification("Successfully deleted!🙂", "success")
                    },
                },
                {
                    label: "No",
                    onClick: () => {
                    },
                },
            ],
        });
    };

    useEffect(() => {
        return () => {
            // Cleanup notification messages
            toast.dismiss();
        };
    }, []);

    return {deleteHandler};
};

export default DestroyProductForm;
