import HomePage from "./Pages/Home/HomePage";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "./Components/Utility/Footer";
import NavbarSection from "./Components/Utility/NavbarSection";
import Login from "./Pages/Home/Login";
import Register from "./Pages/Home/Register";
import Categories from "./Pages/Category/Categories";
import Brands from "./Pages/Brand/Brands";
import Products from "./Pages/Product/Products";
import ProductDetails from "./Pages/Product/ProductDetails";
import CartContent from "./Pages/Cart/CartContent";

function App() {
    return (
        <div className="font">
            <NavbarSection/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/brands" element={<Brands/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/products/:id" element={<ProductDetails/>}/>
                    <Route path="/cart" element={<CartContent/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
