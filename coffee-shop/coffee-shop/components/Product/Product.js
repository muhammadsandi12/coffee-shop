import { useState } from "react"
import ListProduct from "./ListProduct"

export default function Product({dataCategory}){
    const [category, setCategory] =useState(1)
    return(
        <>
            <div className="container bg-[#fefefe]">
                <div className="flex w-10/12  mx-auto">
                    <div className="w-4/12 text-center justify-center ">
                        <h2 className="w-7/12 text-2xl font-bold text-[#6A4029]">Promo Today</h2>
                        <p className="w-7/12 text-xs mt-4 text-black font-normal">Coupons will be updated every weeks. check them out</p>
                    </div>
                    <div className="w-10/12 px-2 ">
                        <ul  className="flex mb-8 ">
                            {dataCategory?.data?.map((item,index) =>{
                              return  <li key={index}  onClick={(e) =>setCategory(item.category_id)} className= {category === item.category_id ? "w-3/12 text-[#6A4029] border-b-4 border-[#6A4029] py-2     cursor-pointer font-bold mr-3 text-center text-xl  ": "w-3/12 text-gray-400 py-2 cursor-pointer font-bold mr-3 text-center text-xl  "} ><a>{item.category_name}</a></li>
                            })}
                        </ul>
                        <ListProduct categoryId={category}/>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}
