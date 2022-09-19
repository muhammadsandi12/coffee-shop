import axios from 'axios'
import Layout from "../../Layouts/Layouts"
import Product from '../../components/Product/Product'

export default function product({dataCategory}) {
    return (
        <>
            <Layout title="Product details" withNavbar={true}>
                <Product dataCategory={dataCategory}/>
            </Layout>
        </>
    )
}


export async function getServerSideProps() {
    let dataCategory = []
    try {
        const resultsCategory = await axios({
            method: 'GET',
            url: 'http://localhost:1111/api/v1/category'
        })
        console.log(resultsCategory.data,'ini hasil result')
        dataCategory = resultsCategory.data

    } catch (err) {
        console.log(err, 'ini error')
    }

    return {
        props: { dataCategory }
    }
}
