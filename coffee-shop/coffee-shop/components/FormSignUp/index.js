import Image from "next/image";
import Button from "../Navbar/Button";
import Logo from "../Navbar/Logo";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthRegister } from "../../redux/action/Auth";
import { useDispatch, useSelector } from "react-redux";

export default function FormSignUp() {
    const router = useRouter()
    const {data, isRegister} = useSelector(state => state.register)
    const dispath = useDispatch()
    const [formRegister, setFormRegister] = useState({})
    const handleRegister = (e) =>{
        e.preventDefault()
        dispath(AuthRegister(formRegister))
    }
    console.log(isRegister, 'ini register')

    useEffect(() =>{
        if(isRegister === true){
            router.replace("/signin")
        }
    },[isRegister])
    return (
        <div className="container  mx-auto">
            <div className="flex mx-auto container justify-between">
                <Logo />
                <Button href="/signin" variant={"yellow"}>Login</Button>
            </div>
            <div>
                <div className="text-center text-[#6A4029] text-4xl mt-20 font-bold">
                    Sign Up
                </div>
                <div className="mx-auto w-8/12 mt-10">
                    <form >
                        <div className="mt-4">
                            <label className="text-gray-500 font-bold text-xl" >Email Address:</label>
                            <input className="w-full border rounded-2xl py-4 px-2 mt-1" type={"email"} placeholder="Enter your email address"  onChange={(e) => setFormRegister(prevData =>({
                                ...prevData,
                                email: e.target.value
                            }))}/>
                        </div>
                        <div className="mt-4">
                            <label className="text-gray-500 font-bold text-xl" >Password: </label>
                            <input className="w-full border rounded-2xl py-4 px-2 mt-1" type={"password"} placeholder="Enter your email address" onChange={(e) => setFormRegister(prevData =>({
                                ...prevData,
                                password: e.target.value
                            }))}/>
                        </div>
                        <div className="mt-4">
                            <label className="text-gray-500 font-bold text-xl" >Phone Number: </label>
                            <input className="w-full border rounded-2xl py-4 px-2 mt-1" type={"text"} placeholder="Enter your email address" onChange={(e) => setFormRegister(prevData =>({
                                ...prevData,
                                phone_number: e.target.value
                            }))}/>
                        </div>
                        <button className="w-full border rounded-2xl py-4 px-2 mt-8 bg-[#FFBA33] text-[#6A4029] font-bold text-xl" onClick={handleRegister}>Sign Up</button>
                    </form>
                    <div onClick={() => alert('sdsd')} className="w-full shadow-lg rounded-2xl border flex justify-center items-center py-4 px-2 mt-8 bg-white">
                        <div className="mr-2">
                        <Image className="mr-2" src={"/google-logo.png"} width={27} height={28}/>
                        </div>
                        <div className=" text-[#6A4029] font-bold text-xl leading-4" >
                            Sign up with Google
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}