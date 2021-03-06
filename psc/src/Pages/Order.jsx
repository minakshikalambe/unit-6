import React, { useEffect } from "react";
import{Box, Heading} from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../Redux/products/action";
import ProductSimple from "../Components/ProductSimple";
export const Order=()=>{
    const dispatch=useDispatch()
    const orders=useSelector(store=>store.ecommerceData.orders)
    useEffect(()=>{
      dispatch(fetchOrder())
    },[dispatch])
    return(
        <Box>
            <Heading as="h2" size="xl" textAlign={"center"}>Your Order</Heading>
            <Box>{orders.map(product=>{
                return <ProductSimple key={product.id} image={product.image} title={product.title} price={product.price}/>
            })}</Box>
        </Box>
    )
}