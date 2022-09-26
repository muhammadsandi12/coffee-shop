import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { sessionOptions} from "../../lib/session";
import { useEffect } from "react";
import useSWR from 'swr';
import { useDispatch, useSelector } from "react-redux";
import { GetUsersById } from "../../redux/action/Users";
import { useRouter } from "next/router";
export default function NavRight() {
    const router = useRouter()
    const login = useSelector(state => state.login)
    const {data} = useSelector(state => state.getUsers)
    const dispatch = useDispatch()
    const token = login.data.token
    console.log(data.profile_image, 'ini users')
    useEffect(() =>{
        dispatch(GetUsersById(token))
    },[])
    const handleUser =() =>{
        router.push("/profile")
    }
    return (
        <>
        {login.isLogin ? (
            <div className="flex justify-end space-x-10">
            <div>
                <Image src={"/search.png"} width={30} height={30} />
            </div>
            <div>
            <Image src={"/chat.png"} width={30} height={30} />
            </div>
            <div onClick={handleUser}>
            <Image className="rounded-full" src={`http://localhost:1111/upload/${data.profile_image}`} width={30} height={30} />
                
            </div>

        </div>
        ):(
            <div>
                <Button href="/signin" variant="white" >
                    Login
                </Button>
                <Button href="/signup" variant="yellow">
                    Sign Up
                </Button>
            </div>
        )}
           
           
        </>
    )
}   