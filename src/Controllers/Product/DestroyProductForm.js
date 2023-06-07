import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { destroyProduct, getProducts } from "../../Redux/Actions/ProductAction";
import { confirmAlert } from "react-confirm-alert";
import use_notification from "../use_notification";
import { toast } from "react-toastify";

const DestroyProductForm = (id) => {
    const dispatch = useDispatch();
    const { loadingD } = useSelector((state) => state.products);
    const currentPage = useSelector((state) => state.products.products.paginationResult?.currentPage);
    const deleteHandler = (e) => {
        e.preventDefault();
        confirmAlert({
            title: "Confirm Delete",
            message: "Are you sure you want to delete this product?",
            buttons: [
                {
                    label: "Yes",
                    onClick: async () => {
                        await dispatch(destroyProduct(id));
                        use_notification("Successfully deleted!🙂", "success");
                    },
                },
                {
                    label: "No",
                    onClick: () => {},
                },
            ],
        });
    };

    useEffect(() => {
        dispatch(getProducts({ limit: 12, page: currentPage }));

        return () => {
            // Cleanup notification messages
            toast.dismiss();
        };
    }, [dispatch,currentPage]);

    return { deleteHandler };
};

export default DestroyProductForm;
