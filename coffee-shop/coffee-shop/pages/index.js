import Hero from "../components/LandingPage/Hero"
import Navbar from "../components/Navbar/NavBar"
import TeamWork from "../components/LandingPage/TeamWork"
import Favorite from "../components/LandingPage/Favorite"
import MapStore from "../components/LandingPage/MapStore"
import OurPartner from "../components/LandingPage/OurPartner"
import Footer from "../components/Footer/Footer"
export default function Home() {
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
