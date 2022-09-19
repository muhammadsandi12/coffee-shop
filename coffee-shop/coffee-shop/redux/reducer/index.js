import { combineReducers } from "redux";
import GetCheckout from "./GetCheckout";
import AddPayment from "./AddPayment"
const rootReducers = combineReducers({
    getCheckout : GetCheckout,
    addPayment: AddPayment
   
})

export default rootReducers