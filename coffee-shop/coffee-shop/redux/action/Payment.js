import axios from "axios"
import Swal from "sweetalert2";
const AddPaymentRequest =() =>{
    return{
        type: 'ADD_PAYMENT_REQUEST',
       
    };
};

const AddPaymentSuccess = (data) =>{
    return{
        type: 'ADD_PAYMENT_SUCCESS',
        payload: data
    };
};


const AddPaymentError = (error) =>{
    return{
        type: 'ADD_PAYMENT_ERROR',
        payload: error
    };
};



export const AddPayment = (data) => {
    return (dispatch) =>{
        dispatch(AddPaymentRequest())
        axios({
            method: "POST",
            url: `http://localhost:1111/api/v1/payment`,
            data: data
        }).then((res) =>{
            console.log(res.data.status, 'ini res data payment')
            if (res.data.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: '',
                    text: 'Payment Success',
                })
            }
            dispatch(AddPaymentSuccess(res.data))
        }).catch((err) =>{
            dispatch( AddPaymentError(err.response.data))
        })
    }
}
