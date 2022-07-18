import {SIGNIN_REQUEST,SIGNIN_SUCCESS,SIGNIN_FAILURE} from "./actionTypes"

const initialState ={
    auth:false,
    token:''
}
const authReducer=(state=initialState,action)=>{
    const{type,payload}=action;
    switch(type){
        case SIGNIN_REQUEST:
            return{
               auth:false,
               token:'',
               error:false
            }
            case SIGNIN_SUCCESS:
                return{
                    auth:true,
                    token:payload.token,
                    error:false
                }
                case SIGNIN_FAILURE:
                    return{
                        auth:false,
                        token:"",
                        error:true
                    }
            default:
                return state;
    }
}
export{authReducer }