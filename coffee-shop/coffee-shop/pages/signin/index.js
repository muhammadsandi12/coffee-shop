import Layout from "../../Layouts/Layouts";
import Image from "next/image";
import FormSignIn from "../../components/FormSignIn";
export default function signUp(){
    return(
     <Layout>
            <div className="flex">
                <div className="bg-form bg-cover w-5/12 ">
                </div>
                <div className=" w-7/12 px-20 py-8 ">
                    <FormSignIn/>
                </div>
            </div>
     </Layout>
    )
}