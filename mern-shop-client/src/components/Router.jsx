import Checkout from '../pages/Checkout';
import ParrotList from '../pages/ParrotsList';
import ShoppingCart from '../pages/ShoppingCart';
import SignUp from '../pages/SignUp'
import SmallShoppingCart from '../pages/SmallShoppingCart'
import AddOrUpdateProduct from '../pages/AddOrUpdateProduct'
import LogIn from '../pages/LogIn';
import Parrot from './Parrot';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
    return (
        <Routes>
            <Route path="list" element={<ParrotList />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="ShoppingCart" element={<ShoppingCart />} />
            <Route path="SmallShoppingCart" element={<SmallShoppingCart />} />
            <Route path="AddOrUpdateProduct" element={<AddOrUpdateProduct />} />
            <Route path="Login" element={<LogIn />} />
            <Route path="parrot" element={<Parrot />} />
            <Route path="*" element={<SignUp />} />
        </Routes>);
}

export default Router;
