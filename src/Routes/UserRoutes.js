import {Route, Routes} from "react-router-dom";
import UserOrdersPage from "../Pages/User/UserOrdersPage";
import PaymentMethodType from "../Pages/Checkout/PaymentMethodType";
import UserFavoritesPage from "../Pages/User/UserFavoritesPage";
import UserAddressesPage from "../Pages/User/Addresses/UserAddressesPage";
import UserCreateAddressPage from "../Pages/User/Addresses/UserCreateAddressPage";
import UserEditAddressPage from "../Pages/User/Addresses/UserEditAddressPage";
import UserProfilePage from "../Pages/User/UserProfilePage";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/user/orders" element={<UserOrdersPage/>}/>
            <Route path="/order/paymethod" element={<PaymentMethodType/>}/>
            <Route path="/user/favorites" element={<UserFavoritesPage/>}/>
            <Route path="/user/addresses" element={<UserAddressesPage/>}/>
            <Route path="/user/addresses/create" element={<UserCreateAddressPage/>}/>
            <Route path="/user/addresses/edit" element={<UserEditAddressPage/>}/>
            <Route path="/user/profile" element={<UserProfilePage/>}/>
        </Routes>
    )
}
export default UserRoutes