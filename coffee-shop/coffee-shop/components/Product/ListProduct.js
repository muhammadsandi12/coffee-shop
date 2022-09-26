import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"


export default function ListProduct({ categoryId }) {
    const [listProduct, setListProduct] = useState()
    useEffect(() => {
        console.log(categoryId, 'axios')
        axios({
            method: "GET",
            url: `http://localhost:1111/api/v1/product?id_category=${categoryId}`
        }).then((res) => {
            setListProduct(res.data.data)
        }).catch((err) => {
            console.log(err)
        })

    }, [categoryId])
    return (
        <>
            <div className="flex flex-wrap  w-10/12 mt-4 mx-auto">
                {listProduct?.map((item,index) => {
                    return (
                        <>
                            <Link  href={`/product/details/${item.product_id}`}  key={item.product_id} >
                                <div key={item.product_id} className="mb-10 bg-[#fff] rounded-xl shadow-black	shadow-sm py-3  w-3/12 mr-7 text-center">
                                    <div key={index}>
                                        <Image className="rounded-full" src={`http://localhost:1111/upload/${item.product_image}`} width={100} height={100} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{item.product_name}</h3>
                                    </div>
                                    <div className="text-sm font-bold text-[#6A4029]">
                                       IDR {item.product_price}
                                    </div>


                                </div>
                            </Link>
                        </>
                    )
                })}
            </div>
        </>
    )
}