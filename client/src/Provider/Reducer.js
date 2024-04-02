export const reducer=(state,action)=>{

    if(action.type=="api_fetched"){

        return{
            ...state,
            loading:action.payload.load,
            api_data:action.payload.api,
        }
    
    }
    return state;
}