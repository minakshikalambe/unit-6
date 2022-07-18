// import { Axios } from "axios";

// //  export const SIGNIN_REQUEST="SIGNIN_REQUEST";
// //  export const SIGNIN_SUCCESS="SIGNIN_SUCCESS";
// //  export const SIGNIN_FAILURE="SIGNIN_FAILURE";
// import { SIGNIN_REQUEST,SIGNIN_SUCCESS,SIGNIN_FAILURE} from "./actionTypes";
// const singInRequest=()=>{
//     return{
//         type:SIGNIN_REQUEST,
//     };
// }
// const singInSuccess=(payload)=>{
//     return{
//         type:SIGNIN_SUCCESS,
//         payload,
// }
// const singInFailure=(payload)=>{
//     return{
//         type:SIGNIN_FAILURE,
//         payload,
//     }
// }

// const signIn=(payload)=>(dispatch)=>{
//     dispatch(singInRequest())
//     Axios.post('/api/login',payload,{baseURL:"https://reqres.in"})
//     .then((r)=>dispatch(singInSuccess(r)))
//     .catch((e)=>dispatch(singInFailure(e.data)))
// }

// export default signIn
import { Axios } from "axios";
import*as types from'./actionTypes';

//  export const SIGNIN_REQUEST="SIGNIN_REQUEST";
//  export const SIGNIN_SUCCESS="SIGNIN_SUCCESS";
//  export const SIGNIN_FAILURE="SIGNIN_FAILURE";

const singInRequest=()=>{
    return{
        type:types.SIGNIN_REQUEST,
    };
}
const singInSuccess=(payload)=>{
    return{
        type:types.SIGNIN_SUCCESS,
        payload,
    }
}
const singInFailure=(payload)=>{
    return{
        type:types.SIGNIN_FAILURE,
        payload,
    }
}


const signIn=(payload)=>(dispatch)=>{
    dispatch(singInRequest())
    Axios.post('/api/login',payload,{baseURL:"https://reqres.in"})
    .then((r)=>dispatch(singInSuccess(r)))
    .catch((e)=>dispatch(singInFailure(e.data)))
}

export { signIn}