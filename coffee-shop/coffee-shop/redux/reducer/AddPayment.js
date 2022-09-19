const initialState = {
    loading: false,
    data: {},
}

const Fetch = (state=initialState, action={}) => {
    switch (action.type){
        case "ADD_PAYMENT_REQUEST":
            return{...state, loading:true}
        case "ADD_PAYMENT_ERROR":
            return{...state, loading:false, error: action.payload}
        case "ADD_PAYMENT_SUCCESS":
            return{...state, loading:false, data: action.payload}
        default:
            return state
    }
}

export default Fetch