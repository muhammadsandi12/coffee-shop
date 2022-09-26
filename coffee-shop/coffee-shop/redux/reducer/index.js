import { combineReducers } from "redux";
import GetCheckout from "./GetCheckout";
import AddPayment from "./AddPayment"
import Register from "./Register"
import Login from "./Login"
import GetUsers from "./GetUsers"


const rootReducers = combineReducers({
    getCheckout : GetCheckout,
    addPayment: AddPayment,
    login: Login,
    register: Register,
    getUsers: GetUsers,
    
   
})

export default rootReducers