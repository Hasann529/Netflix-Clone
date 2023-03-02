
const initialState = {
       list:[]
}


export const actionReducer = (state=initialState,{type,payload})=>{

    switch (type) {
        case 'ADD':
            return{
                ...state,
                list: [...state.list, payload]
                  }
        case 'REMOVE':
            return{
                 list:state.list.filter( li => li.id !== payload.id)
                  }  
        case 'CLEAR':
            return{
                 list:[]
                  }      
    
        default:
            return state;
    }
}