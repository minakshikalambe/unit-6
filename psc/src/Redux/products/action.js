
import  Axios  from 'axios';
import*as types from'./actionTypes';

const fetchDataRequest=(payload)=>{
   return{
    type:types.FETCH_DATA_REQUEST,
    payload
   }
}
const fetchDataSuccess=(payload)=>{
    return{
        type:types.FETCH_DATA_SUCCESS,
        payload
    }
}
const fetchDataFailure=(payload)=>{
    return{
        type:types.FETCH_DATA_FAILURE,
        payload
    }
}
const fetchData =(payload)=>{
    return (dispatch)=>{
    dispatch(fetchDataRequest())
    Axios.get('/products',{
        params:{
            ...payload
        }
    })
    .then(r=>dispatch(fetchDataSuccess(r.data)))
    .catch(e=>dispatch(fetchDataFailure(e.data)))
    };
}
const getSingleProductRequest=(payload)=>{
    return{
     type:types.GET_SSINGLE_PRODUCT_REQUEST,
     payload
    }
 }
 const getSingleProductSuccess=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_SUCCESS,
         payload
     }
 }
 const getSingleProductFilure=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_FAILURE,
         payload
     }
 }
 
 const getSingleProduct =(id)=>(dispatch)=>{
    dispatch(getSingleProductRequest())
    Axios.get(`/products/${id}`).then(r=>dispatch(getSingleProductSuccess(r.data))).catch(e=>dispatch(getSingleProductFilure(e.data)))
 }

 const addProductCardRequest=(payload)=>{
    return{
     type:types.ADD_PRODUCT_CART_REQUEST,
     payload
    }
 }
 const addProductCardSuccess=(payload)=>{
     return{
         type:types.ADD_PRODUCT_CART_SUCCESS,
         payload
     }
 }
 const addProductCardFailure=(payload)=>{
     return{
         type:types.ADD_PRODUCT_CART_FAILURE,
         payload
     }
 }
 const addProductCard=(product)=>dispatch=>{
     dispatch(addProductCardRequest())
     Axios.post("/cart",product).then((r)=>dispatch(addProductCardSuccess(r.data))).catch((e)=>dispatch(addProductCardFailure(e.data)))
 }
 
 const fetchCartRequest=(payload)=>{
    return{
     type:types.FETCH_CART_REQUEST,
     payload
    }
 }
 const fetchCartSuccess=(payload)=>{
     return{
         type:types.FETCH_CART_SUCCESS,
         payload
     }
 }
 const fetchCartFailure=(payload)=>{
     return{
         type:types.FETCH_CART_FAILURE,
         payload
     }
 }
 const fetchCart=(payload)=>dispatch=>{
    dispatch(fetchCartRequest())
    Axios.get('/cart').then((r)=>dispatch(fetchCartSuccess(r.data))).catch((e)=>dispatch(fetchCartFailure(e.data)))

 }
 const deleteProductCartRequest =(payload)=>{
    return{
     type:types.REMOVE_PRODUCT_CART_REQUEST,
     payload
    }
 }
 const deleteProductCartSuccess=(payload)=>{
     return{
         type:types.REMOVE_PRODUCT_CART_SUCCESS,
         payload
     }
 }
 const deleteProductCartFailure=(payload)=>{
     return{
         type:types.REMOVE_PRODUCT_CART_FAILURE,
         payload
     }
 }
 const deletProductCart=(id)=>dispatch=>{
     dispatch(deleteProductCartRequest())
     Axios.delete(`/cart/${id}`).then((r)=>dispatch(deleteProductCartSuccess(r.data)))
     .then(()=>dispatch(fetchCart())).catch((e)=>dispatch(deleteProductCartFailure(e.data)))}

     const addOrderRequest=()=>{
        return{
            type:types.ADD_ORDER_REQUEST
        }
     }
     const addOrderSuccess=(payload)=>{
        return{
            type:types.ADD_ORDER_SUCCESS,
            payload
        }
     }
     const ADD_ORDER_FAILURE=(payload)=>{
        return{
            type:types.ADD_ORDER_FAILURE,
            payload
        }
     }
     const addOrder=(payload)=>(dispatch)=>{
        dispatch(addOrderRequest());
        const orderPayload=[];
        for(let product of payload){
            product && orderPayload.push(Axios.post('/orders',product))
            Promise.all(orderPayload)
            .then(()=>dispatch(addOrderSuccess()))
            .then(()=>dispatch(emptyCart(payload)))
            .catch((e)=>dispatch(addProductCardFailure()))
        }
     }
    const emptyCartRequest=()=>{
        return{
            type:types.EMPTY_CART_REQUEST
        }
    }
    const emptyCartSuccess=()=>{
        return{
            type:types.EMPTY_CART_SUCCESS
        }
    }
    const emptyCartFailure=()=>{
        return{
            type:types.EMPTY_CART_FAILUER
        }
    }
    const emptyCart=(payload)=>(dispatch)=>{
        dispatch(emptyCartRequest())
        const deletOrders=[];
        for(let obj of payload){
            let temp=dispatch(deletProductCart(obj.id))
            deletOrders.push(temp)
        }
        Promise.all(deletOrders).then(r=>dispatch(emptyCartSuccess())).catch(e=>dispatch(emptyCartFailure()))
    }
    const fetchOrderRequest=(payload)=>{
        return{
         type:types.FETCH_ORDERS_REQUEST,
         payload
        }
     }
     const fetchOrderSuccess=(payload)=>{
         return{
             type:types.FETCH_ORDERS_SUCCESS,
             payload
         }
     }
     const fetchOrderFailure=(payload)=>{
         return{
             type:types.FETCH_ORDERS_FAILURE,
             payload
         }
     }
     const fetchOrder=(payload)=>dispatch=>{
        dispatch(fetchOrderRequest())
        Axios.get('/cart').then((r)=>dispatch(fetchOrderSuccess(r.data))).catch((e)=>dispatch(fetchOrderFailure(e.data)))
    
     } 
export{fetchData,getSingleProduct,addProductCard,fetchCart,deletProductCart,addOrder,emptyCart,fetchOrder}