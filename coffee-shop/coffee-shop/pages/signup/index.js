import Layout from "../../Layouts/Layouts";
import FormSignUp from "../../components/FormSignUp";
import Image from "next/image";
export default function signUp(){
    return(
     <Layout>
            <div className="flex">
                <div className="bg-form bg-cover w-5/12 ">
                </div>
                <div className=" w-7/12 px-20 py-8 ">
                    <FormSignUp/>
                </div>
            </div>

     </Layout>
    )
}