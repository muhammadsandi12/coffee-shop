import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/NavBar'
const Layout = ({title ="Home",withNavbar =false ,children}) =>{
    return(
        <div>
             <Head>
             {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet"/> */}


                <title>{title} - Coffee Shop</title>
            </Head>
                    {withNavbar && (
                        <Navbar/>
                    )} 
            <main>{children}</main>
             <Footer/> 
        </div>
    )
}

export default Layout