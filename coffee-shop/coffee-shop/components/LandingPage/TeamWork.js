export default function TeamWork(){
    return(
      
        <div className=" container mx-auto py-20">
            <div className="flex w-10/12 px-1 items-center text-center mx-auto justify-center ">
                <img className="w-6/12 text-center  mx-auto" src={"/team-work.png"} width={573} height={457}/>
                <div className=" mx-auto w-6/12 px-4 text-center items-center justify-center">
                    <h1 className="text-3xl font-bold w-8/12 mb-5" >We Provide Good Coffee and Healthy Meals</h1>
                    <p className="text-base w-9/12 text-gray-500 font-semibold">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                    <ul>
                        <li className="flex mt-4 items-center">
                            <img  src="/icon-check.png"/>
                            <p className="text-sm text-gray-500 ml-4 font-semibold">High quality beans</p>
                        </li>
                        <li className="flex mt-4 items-center">
                            <img  src="/icon-check.png"/>
                            <p className="text-sm text-gray-500 ml-4 font-semibold">Healthy meals, you can request the ingredients</p>
                        </li>
                        <li className="flex mt-4 items-center">
                            <img  src="/icon-check.png"/>
                            <p className="text-sm text-gray-500 ml-4 font-semibold">Chat with our staff to get better experience for ordering</p>
                        </li>
                        <li className="flex mt-4 items-center">
                            <img  src="/icon-check.png"/>
                            <p className="text-sm text-gray-500 ml-4 font-semibold">Free member card with a minimum purchase of IDR 200.000.</p>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
            
        
        
    )
}