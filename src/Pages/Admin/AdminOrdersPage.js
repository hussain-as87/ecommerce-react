import Pagination from "../../Components/Utility/Pagination";
import AdminOrdersContainer from "../../Components/Admin/Orders/AdminOrdersContainer";
import {GetOrders} from "../../Controllers/OrderController";
import React from "react";

const AdminOrdersPage = () => {
    const {orders, pageCount, getPage} = GetOrders()

    return (
        <>
            <AdminOrdersContainer orders={orders.data}/>
            {pageCount > 1 && (<Pagination pageCount={pageCount} onPress={getPage}/>)}
        </>
    )
}
export default AdminOrdersPage