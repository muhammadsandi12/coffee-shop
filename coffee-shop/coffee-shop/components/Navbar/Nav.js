import NavItem from './NavItem'
import Link from 'next/link'
export default function Nav() {
    return (
        <ul className='flex justify-center space-x-10'>
            <li>
                <Link href={`/`}><a className='text-[#4F5665] text-opacity-60 font-semibold'>Home</a></Link>
            </li>
            <li>
                <Link href={`/product`}><a className='text-[#4F5665] text-opacity-60 font-semibold'>Product</a></Link>
            </li>
            <li>
                <Link href={`/checkout`}><a className='text-[#4F5665] text-opacity-60 font-semibold'>Your cart</a></Link>
            </li>
            <li>
                <Link href={`/history`}><a className='text-[#4F5665] text-opacity-60 font-semibold'>History</a></Link>
            </li>
        </ul>
    )
}