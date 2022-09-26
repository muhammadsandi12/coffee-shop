import Image from "next/image"
import Layout from "../../Layouts/Layouts"
export default function addProduct() {
    return (
        <div>
            <Layout withNavbar={true}>
                <div className=" container mx-auto flex ">
                    <div className="w-4/12 bg-slate-300  flex flex-col py-8 px-4">
                        <div className="w-[300px] h-[300px] bg-[#BABABA] rounded-full mx-auto mb-8 flex justify-center items-center">
                            <Image src="/camera.png" width={90} height={83} />
                        </div>
                        <div className="mx-auto mb-4">
                            <button className="w-[391px] h-[88px] bg-[#0B132A] text-white font-bold rounded-2xl text-2xl"> Take a picture</button>
                        </div>
                        <div className="mx-auto mb-8 ">
                            <button className="w-[391px] h-[88px] bg-[#FFBA33] text-[#6A4029] font-bold rounded-2xl text-2xl"> Choose from galery</button>
                        </div>
                        <div className="mt-20">
                            <div className="text-[#6A4029] text-2xl font-bold">
                                Delivery Hour :
                            </div>
                        </div>
                    </div>
                    <div className="w-7/12 bg-slate-400 py-8">
sdsfd
                    </div>


                </div>
            </Layout>
        </div>
    )
}