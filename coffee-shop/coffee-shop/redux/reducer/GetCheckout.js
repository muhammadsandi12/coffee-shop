const initialState = {
    loading: false,
    data: {},
}

const Fetch = (state=initialState, action={}) => {
    switch (action.type){
        case "GET_CHECKOUT_SUCCESS":
            return{...state, loading:false, data: action.payload}
        default:
            return state
    }
}

export default Fetch