import Logo from "./Logo"
import Nav from "./Nav"
import NavRight from "./NavRight"
export default function Navbar(){
    return(
        <div className=" w-10/12 mx-auto">
        <div className='flex   items-center py-5  '>
          <div className='w-3/12 '>
            <Logo/> 
          </div>
          <div className='w-6/12 '>
            <Nav/>  
          </div>
          <div className='w-3/12 text-right'>
            <NavRight/>
          </div>
        </div>
        </div>
    )
}