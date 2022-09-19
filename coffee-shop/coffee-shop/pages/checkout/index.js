import Image from "next/image"
import Layout from "../../Layouts/Layouts"
import { useSelector, useDispatch } from "react-redux"
import { AddPayment } from "../../redux/action/Payment" 
import { useState } from "react"

export default function checkout() {
    const { data } = useSelector(state => state.getCheckout)
    const payment = useSelector(state => state.addPayment)
    const dispatch = useDispatch()
    const [subTotal,setSubtotal] = useState(data.product_price * data.count)
    const [dataPayment, setDataPayment] = useState({
        product_id : data.product_id,
        product_count: data.count,
        payment_method: "",
        subtotal: subTotal
    })
    const handlePayment =() =>{
    
        dispatch(AddPayment(dataPayment))
        console.log(payment.data.status)
    }
    return (
        <Layout withNavbar={true}>
            <div className="bg-checkout pb-20 bg-cover bg-no-repeat  h-full">
                <div className="flex w-10/12 container flex-col mx-auto ">
                    <div className="  flex flex-col mt-20 w-6/12">
                        <div className=" text-white  font-bold leading-10 w-6/12 text-4xl">Checkout your item now!</div>
                    </div>
                    <div className=" flex  justify-between py-8 ">
                        <div className="bg-white mt-10 px-4 py-2  flex flex-col rounded-xl w-5/12 ">
                            <div className="text-[#362115] py-10 font-bold text-center text-4xl ">
                                Order Summary
                            </div>
                            <div className="  grow border-b-2 border-gray-200 mt-4 px-4 ">
                                <div className="flex  items-center font-normal">
                                    <div className="w-4/12">
                                        <Image className="rounded-lg" src={`http://localhost:1111/upload/${data.product_image}`} width={82} height={90} />
                                    </div>
                                    <div className="w-4/12 text-lg">
                                        <div>{data.product_name}</div>
                                        <div>{data.count}X</div>
                                        <div>{data.size}</div>
                                    </div>
                                    <div className="w-4/12  text-lg  font-normal">
                                        <div>{data.product_price}</div>
                                    </div>
                                </div>


                            </div>
                            <div className=" mt-4  ">
                                <div className=" text-[#362115] text-xl leading-7">
                                    <div className="my-2 flex justify-between">
                                        <div>
                                        SUBTOTAL 
                                        </div>
                                        <div>
                                            {data.count * data.product_price}
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        TAX & FEES
                                    </div>
                                    <div className="my-2">
                                        SHIPPING
                                    </div>
                                </div>

                            </div>
                            <div className="text-3xl flex justify-between font-bold text-[#362115] mt-4">
                                <div>
                                    TOTAL
                                </div>
                                <div>
                                {data.count * data.product_price}
                                </div>
                            </div>
                        </div>
                        <div className="w-4/12 ">
                            <div className="flex mt-10 justify-between pr-6">
                                <div className=" text-white text-2xl font-bold">
                                    Address details
                                </div>
                                <div>
                                    <button>edit</button>
                                </div>
                            </div>
                            <div className="bg-white  rounded-md mt-2 py-4 px-4">
                                <div className="border-b-2 flex border-gray-200 py-2">
                                    <div className="font-bold text-xl">
                                        Delivery
                                    </div>
                                    <div className=" ml-2 text-xl">to</div>
                                    <div className=" ml-2 text-xl">
                                        <input type="text" className="outline-none" placeholder="input name"/>
                                    </div>
                                </div>
                                <div className="border-b-2  border-gray-200 py-2">
                                <input type="text" className="outline-none" placeholder="input address" />
                                </div>
                                <div className="py-2" >
                                <input type="text" className="outline-none" placeholder="input no handphone"/>
                                </div>
                            </div>
                            <div className="mt-10 text-2xl  text-white font-bold ">
                                Payment Method
                            </div>
                            <div className="bg-white  rounded-md mt-2 py-4 px-4">
                                <form>
                                    <div className=" flex  " >
                                        <input type={"radio"} name="payment" value="card" onChange={(e) =>{setDataPayment((prevData) =>({
                                        ...prevData, 
                                        payment_method: e.target.value
                                        }))}}/>
                                        <div className="w-full py-2 px-4">
                                            <div className="border-b-2 w-full flex py-2 border-gray-200">
                                                <div className="bg-[#F47B0A] mr-2 flex rounded-lg justify-center items-center w-[40px] h-[40px] ">
                                                    <Image src={"/card-logo.png"} width={16} height={12} />
                                                </div>
                                                <div className="text-xl font-semibold">
                                                    card
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex  " >
                                        <input type={"radio"} name="payment" value="Bank Account"  onChange={(e) =>{setDataPayment((prevData) =>({
                                        ...prevData, 
                                        payment_method: e.target.value
                                        }))}}/>
                                        <div className="w-full py-2 px-4">
                                            <div className="border-b-2 w-full flex py-2 border-gray-200">
                                                <div className="bg-[#895537] mr-2 flex rounded-lg justify-center items-center w-[40px] h-[40px] ">
                                                    <Image src={"/bank.png"} width={14} height={16} />
                                                </div>
                                                <div className="text-xl font-semibold">
                                                    Bank Account
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex  " >
                                        <input type={"radio"} name="payment" value="Cash"  onChange={(e) =>{setDataPayment((prevData) =>({
                                        ...prevData, 
                                        payment_method: e.target.value
                                        }))}}/>
                                        <div className="w-full py-2 px-4">
                                            <div className=" w-full flex py-2 ">
                                                <div className="bg-[#F47B0A] mr-2 flex rounded-lg justify-center items-center w-[40px] h-[40px] ">
                                                    <Image src={"/card-logo.png"} width={16} height={12} />
                                                </div>
                                                <div className="text-xl font-semibold">
                                                    Cash 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </form>
                            </div>
                            <div className="mt-8 " >
                                <button  onClick={handlePayment} className="py-4 text-white font-bold text-xl rounded-lg w-full bg-[#895537]" >confirm and pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}