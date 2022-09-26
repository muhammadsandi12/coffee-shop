import Image from "next/image";
import Layout from "../../Layouts/Layouts";
import Button from "../../components/Navbar/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function Profile() {
    const { data } = useSelector(state => state.getUsers)
    const [formUpdate, setFormUpdate] = useState({})
    const [selectedImage, setSelectedImage] = useState();
    console.log(formUpdate)
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            setFormUpdate((prevData) => ({
                ...prevData,
                profile_image: e.target.files[0]
            }))
        }
    };
    const removeSelectedImage = () => {
        setSelectedImage();
        setFormUpdate({
            profile_image: undefined
        })
    };
    const formData = new FormData()
    

    return (
        <Layout withNavbar={true}>
            <div className="bg-profile py-10 ">
                <div className="container mx-auto w-10/12 ">
                    <div className="text-white text-4xl font-semibold ">
                        User Profile
                    </div>
                    <div className="w-full bg-[#F8F8F8] flex rounded-2xl py-14 px-8 mt-8 ">
                        <div className="w-4/12 ">
                            <div className=" container  flex justify-center ">
                                <div className="w-8/12 text-center ">
                                    <div className="flex justify-center">
                                        <img className="rounded-full" src={selectedImage ? URL.createObjectURL(selectedImage) : `http://localhost:1111/upload/${data.profile_image}`} width={175} height={183} />
                                    </div>
                                    <div className="mt-2 text-center  ">
                                        <div className="text-xl font-bold ">
                                            {data.display_name}
                                        </div>
                                        <div className="text-base font-semibold">
                                            {data.email}
                                        </div>
                                        <div className="mt-4">

                                            <input onChange={imageChange} className="hidden" id="file" type="file" accept="image/*" />
                                            <label for='file' className="bg-[#FFBA33] text-[#6A4029] text-base font-bold px-7 mb-4 py-2 rounded-lg">
                                                Choose a photo
                                            </label>

                                        </div>
                                        <div className="mt-4">
                                            <button onClick={removeSelectedImage} className="bg-[#6A4029] text-white text-base font-bold w-9/12 py-2 rounded-lg ">Remove photo</button>
                                        </div>
                                        <div className="mt-4">
                                            <button className="bg-[#9F9F9F] text-[#6A4029] text-lg font-bold w-9/12 py-4 rounded-2xl  ">Edit Password</button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <div className="w-9/12 text-center  text-[#6A4029] text-xl font-bold">
                                            Do you want to save the change?
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <div className="mt-4">
                                            <button className="bg-[#6A4029] text-white text-lg font-bold w-9/12 py-4 rounded-2xl  ">Save Change</button>
                                        </div>
                                        <div className="mt-4">
                                            <button className="bg-[#FFBA33] text-[#6A4029] text-lg font-bold w-9/12 py-4 rounded-2xl  ">Cancel</button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-8">
                                            <button className="bg-[#9F9F9F] text-[#6A4029] text-lg font-bold w-9/12 py-4 rounded-2xl  ">Logout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-8/12 bg-white rounded-xl shadow-xl">
                            <div className=" py-4 px-8">

                                <form>
                                    <div>
                                        <div className="">
                                            <div className="text-2xl text-[#4F5665] font-bold">
                                                Contact
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <div className=" flex flex-col w-6/12">
                                                <label className="text-[#9F9F9F] text-xl mb-2 font-medium">Email address :</label>
                                                <input type="email" defaultValue={data.email} disabled className="outline-none py-2 text-xl  border-b-[0.5px] border-black" />
                                            </div>
                                            <div className=" flex flex-col w-4/12">
                                                <label className="text-[#9F9F9F] text-xl mb-2 font-medium">Mobile number :</label>
                                                <input  type="text" defaultValue={data.phone_number} className="outline-none py-2 text-xl  border-b-[0.5px] border-black" onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    phone_number: e.target.value
                                                }))
                                            }} />
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <div className=" flex flex-col w-6/12">
                                                <label className="text-[#9F9F9F] text-xl mb-2 font-medium">Delivery address :</label>
                                                <input  type="text" defaultValue={data.delivery_address} className="outline-none py-2 text-xl  border-b-[0.5px] border-black"onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    delivery_address: e.target.value
                                                }))
                                            }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-8 ">
                                            <div className="text-2xl text-[#4F5665] font-bold">
                                                Details
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <div className=" flex flex-col w-6/12">
                                                <label className="text-[#9F9F9F] text-xl mb-2 font-medium">Display name :</label>
                                                <input defaultValue={data.display_name} type="text" className="outline-none py-2 text-xl  border-b-[0.5px] border-black" onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    display_name: e.target.value
                                                }))
                                            }} />
                                            </div>
                                            <div className=" flex flex-col w-4/12">
                                                <label className="text-[#9F9F9F] text-xl mb-2 font-medium">DD/MM/YY :</label>
                                                <input defaultValue={data.tanggal_lahir} type="date" className="outline-none py-2 text-xl  border-b-[0.5px] border-black" onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    tanggal_lahir: e.target.value
                                                }))
                                            }} />
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <div className=" flex flex-col w-6/12">
                                                <label className="text-[#9F9F9F] text-xl mb-2 font-medium">First name :</label>
                                                <input defaultValue={data.firstname} type="email" className="outline-none py-2 text-xl  border-b-[0.5px] border-black" onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    firstname: e.target.value
                                                }))
                                            }} />
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-6">
                                            <div className=" flex flex-col w-6/12">
                                                <label className="text-[#9F9F9F] text-xl mb-2 font-medium">Last name:</label>
                                                <input defaultValue={data.lastname} type="email" className="outline-none py-2 text-xl  border-b-[0.5px] border-black" onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    lastname: e.target.value
                                                }))
                                            }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>


                                        <div className="flex justify-center mt-14 space-x-8">
                                            <div className=" flex items-center space-x-2">
                                                <input checked={data.gender === "male"} type="radio" name="gender" value="male" className="outline-none text-[#9F9F9F] mb-2 font-medium py-2 text-xl border-2 border-black" onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    gender: e.target.value
                                                }))
                                            }} />
                                                <label className="text-[#9F9F9F] text-xl mb-2 font-medium">Male</label>
                                            </div>
                                            <div className=" flex items-center space-x-2">
                                                <input  checked={data.gender === "male"}
                                                    type="radio" name="gender" className="outline-none text-[#9F9F9F] mb-2 font-medium py-2 text-xl  border-b-[0.5px] border-black" value="female" onChange={(e) => {
                                                        setFormUpdate((prevData) => ({
                                                            ...prevData,
                                                            gender: e.target.value
                                                        }))
                                                    }} />
                                                <label className="text-[#9F9F9F] text-xl mb-2 font-medium">female</label>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )

}