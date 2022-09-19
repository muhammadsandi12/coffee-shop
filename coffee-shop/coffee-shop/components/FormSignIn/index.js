import Image from "next/image";
import Link from "next/link";
import Button from "../Navbar/Button";
import Logo from "../Navbar/Logo";
import swal from 'sweetalert2'
import { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/router";
export default function FormSignIn() {
    const router = useRouter()
    const [formLogin, setFormLogin] = useState({})
    const handleLogin = (e) =>{
        e.preventDefault()
        axios({
            method:'POST',
            url:`api/auth/login`,
            data: formLogin
        }).then((res) =>{
        console.log(res)  
        })
    }

    return (
        <div className="container  mx-auto">
            <div className="flex mx-auto container justify-between">
                <Logo />
                <Button href="/signup" variant={"yellow"}>
                        Sign Up
                </Button>
            </div>
            <div>
                <div className="text-center text-[#6A4029] text-4xl mt-20  font-bold">
                    Login
                </div>
                <div className="mx-auto w-8/12 mt-10">
                    <form onSubmit={handleLogin} >
                        <div className="mt-4">
                            <label className="text-gray-500 font-bold text-xl" >Email Address: </label>
                            <input className="w-full border rounded-2xl py-4 px-2 mt-1" type={"email"} placeholder="Enter your email address" onChange={(e) => setFormLogin(prevData =>({
                                ...prevData,
                                email: e.target.value
                            }))}/>
                        </div>
                        <div className="mt-4">
                            <label className="text-gray-500 font-bold text-xl" >Password: </label>
                            <input className="w-full border rounded-2xl py-4 px-2 mt-1" type={"password"} placeholder="Enter your email address" onChange={(e) => setFormLogin(prevData =>({
                                ...prevData,
                                password: e.target.value
                            }))}/>
                        </div>
                        <div className="text-[#6A4029] underline mt-4 font-bold ">
                            <Link className="" href={{}}>Forgot password? </Link>
                        </div>
                        <button className="w-full border rounded-2xl py-4 px-2 mt-8 bg-[#FFBA33] text-[#6A4029] font-bold text-xl">Sign in</button>
                    </form>
                    <div onClick={() => alert('sdsd')} className="w-full shadow-lg rounded-2xl border flex justify-center items-center py-4 px-2 mt-8 bg-white">
                        <div className="mr-2">
                        <Image className="mr-2" src={"/google-logo.png"} width={27} height={28}/>
                        </div>
                        <div className=" text-[#6A4029] font-bold text-xl leading-4" >
                            Login with Google
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}