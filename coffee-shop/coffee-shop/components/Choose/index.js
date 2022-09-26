import Image from "next/image";

export default function Choose(size) {
    console.log(size.size, 'ini size choose')
    return (
        <div className='flex justify-evenly mt-8'>
            {size?.size.map((item, index) =>{
                return(
                    <div key={index} className="bg-[#FFBA33] w-[70px] h-[70px] flex justify-center items-center rounded-full" onClick={() => alert(`${item.ket}`)}>
                        {item.code}
                    </div>
                )
            })}
        </div>
    )

}


