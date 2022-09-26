import Hero from "../components/LandingPage/Hero"
import Navbar from "../components/Navbar/NavBar"
import TeamWork from "../components/LandingPage/TeamWork"
import Favorite from "../components/LandingPage/Favorite"
import MapStore from "../components/LandingPage/MapStore"
import OurPartner from "../components/LandingPage/OurPartner"
import Footer from "../components/Footer/Footer"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useRouter } from "next/router"
export default function Home() {
  const {isLogin} = useSelector(state => state.login)
  const router = useRouter()
  useEffect(() =>{
    if(isLogin === false){
      router.replace("/signin")
    }
  },[isLogin])
  return (
    <>
      <Navbar/>
      <Hero/>
      <TeamWork/>
      <Favorite/>
      <MapStore/>
      <OurPartner/>
      <Footer/>
    </>
  )
}
