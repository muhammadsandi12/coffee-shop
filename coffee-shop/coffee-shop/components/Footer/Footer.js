import Logo from "../Navbar/Logo"
export default function Footer() {
    return (
        <>
            <div className="w-10/12 mx-auto py-20 ">
                <div className="container flex  justify-between ">
                    <div className="w-6/12">
                        <Logo />
                    </div>

                    <div className="flex w-3/12 justify-center   ">
                        <h3 className="w-6/12 text-lg text-black font-medium ">Product</h3>
                       
                        <h3 className="w-6/12 text-lg text-black font-medium">Engage</h3>
                    </div>
                </div>
                <div className="container flex  justify-between">
                    <div className="w-3/12 text-base font-medium text-gray-600 mt-5 leading-7">
                        <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                        <div className="flex mt-5">
                            <img className="mr-6" src="/facebook.png" width="33px" height="33px" />
                            <img className="mr-6" src="/twitter.png" width="33px" height="33px" />
                            <img className="mr-6    " src="/instagram.png" width="33px" height="33px" />
                        </div>
                        <p className="text-gray-400 mt-5">&copy;2020CoffeeStore</p>

                    </div>
                    <div className="flex w-3/12 justify-center">
                        <ul className="w-6/12 text-base text-gray-500 font-medium mt-5 leading-7">
                            <li><a>Download</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Locations</a></li>
                            <li><a>Countries</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                        <ul className="w-6/12 text-base text-gray-500 font-medium mt-5 leading-7">
                            <li><a>Coffee Shop ?</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>About us</a></li>
                            <li><a>Privacy Policy</a></li>
                            <li><a>Terms of Services</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </>


    )
}