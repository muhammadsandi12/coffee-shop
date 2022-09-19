
export default function Hero() {
    return (
        <>
            <div className="bg-hero  bg-cover pt-20 h-[645px] ">
                <div className="w-10/12 mx-auto  ">
                    <h1 className=" text-5xl text-white font-bold w-6/12 leading-normal">Start Your Day with Coffee and Good Meals</h1>
                    <p className="text-white w-5/12 text-xl leading-7 font-semibold mt-5">
                        We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!
                    </p>
                    <button className="bg-[#FFBA33] font-bold text-base py-4 px-20 text-[#6A4029] mt-6 rounded-lg">Get Started</button>
                    <div className="w-10/12 mt-36 h-[200px]  shadow-sm shadow-gray-400 mx-auto flex  bg-white justify-between  rounded-md  absolute">
                        <div className="flex  py-10 px-10 ">
                            <div className="">
                                <img src="/user.png" width="55px" height="55px" />
                            </div>
                            <div>
                                <h1>90+</h1>
                                <p>Staff</p>
                            </div>
                        </div>
                        <div className="flex  py-10 px-10 ">
                            <div className="">
                                <img src="/user.png" width="55px" height="55px" />
                            </div>
                            <div>
                                <h1>90+</h1>
                                <p>Staff</p>
                            </div>
                        </div>
                        <div className="flex  py-10 px-10 ">
                            <div className="">
                                <img src="/user.png" width="55px" height="55px" />
                            </div>
                            <div>
                                <h1>90+</h1>
                                <p>Staff</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}