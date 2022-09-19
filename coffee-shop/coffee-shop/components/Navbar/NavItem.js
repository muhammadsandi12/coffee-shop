import Link from "next/link"
export default  function NavItem({children}) {
    
    return(
        <li>
            <Link href={`/${ children.toLowerCase()}`}><a className='text-[#4F5665] text-opacity-60 font-semibold'>{children}</a></Link>
        </li>
    )
}