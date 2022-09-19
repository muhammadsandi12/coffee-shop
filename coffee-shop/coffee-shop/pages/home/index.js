import { useEffect } from "react"
import { useRouter } from 'next/router'

export default function Homepage (){
    const router = useRouter()
    useEffect(() =>{
        router.push("/")
    },[])
    return(
        <>
        </>
    )
}