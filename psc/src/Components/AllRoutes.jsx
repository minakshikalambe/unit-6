import React from "react";
import {Routes, Route} from 'react-router-dom'
import Homepage from "../Pages/Homepage";
import {Products} from "../Pages/Products";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import { Order } from "../Pages/Order";
import Login from "../Pages/Login";
import AuthWrapper from "./AuthWrapper";
const AllRoutes=()=>{
    return(
        <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<AuthWrapper><Cart/></AuthWrapper>}/>
        <Route path="/orders" element={<Order/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}
export default AllRoutes