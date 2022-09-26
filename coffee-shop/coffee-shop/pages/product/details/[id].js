import axios from 'axios'
import Layout from '../../../Layouts/Layouts'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'
import Choose from '../../../components/Choose'
import { GetCheckoutSuccess } from '../../../redux/action/Checkout'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

export default function Details({ data }) {
  const initial = 0
  const [count, setCount] = useState(initial)
  const [sizeProduct, setSizeProduct] = useState()
  const [booking, setBooking] = useState([])
  const [chart, setChart] = useState([])
  const [delivery, setDelivery] = useState('Dine In')
  const [time, setTime] = useState()
  const router = useRouter()
  console.log(booking[0], 'ini booking')
  const dispatch = useDispatch()
  const handleCheckout = (item) =>{
      if(count === initial){
        Swal.fire({
          icon:"error",
          title:"",
          text:"jumlah pesanan tidak boleh kosong"
        })

      }else if(booking[0] === undefined){
        Swal.fire({
          icon:"error",
          title:"",
          text:"silahkan pilih size terlebih dahulu"
        })
      }else{

        dispatch(GetCheckoutSuccess({
        product_id: item.product_id,
        product_image: item.product_image,
        product_name: item.product_name,
        product_price: item.product_price,
        count: count,
        size: booking[0],
        delivery: delivery,
            time: time
      }))
      router.push("/checkout")
      }
    
   
  }
  
  
  return (
    <Layout title="product" withNavbar={true}>
      {data?.data?.map((item) => {
        return (
          <div className='bg-gray-100 '>
            <div className='flex flex-col ' >
              <div className='container flex mx-auto pt-20'>
                <div className='flex flex-col w-5/12'>
                  <div className='flex justify-center mt-14   w-full'>
                    <Image className="rounded-full" src={`http://localhost:1111/upload/${item.product_image}`} width={350} height={350} />
                  </div>
                  <div className='flex justify-center'>
                    <h1 className='text-7xl font-black mt-6 '>{item.product_name}</h1>
                  </div>
                  <div className='flex  justify-center'>
                    <h3 className='mt-4 text-3xl font-normal'>IDR  {item.product_price}</h3>
                  </div>
                </div>
                <div className=' w-6/12 py-14 px-14 text-2xl bg-white rounded-xl '>
                  <div className='w-8/12 font-bold text-[#6A4029] '>
                    Delivery only on Monday to friday at  1 - 7 pm
                  </div>
                  <div className='w-10/12  text-2xl font-normal mt-6 text-[#6A4029]'>
                    {item.product_desc}
                  </div>
                  <div className='mt-10 text-black font-bold text-2xl text-center'>
                    choose a size
                  </div>
                  <div className='flex justify-evenly mt-8'>
                    {data?.size?.results?.map((size, index) => {
                      return (
                        <div key={index} className={booking[0] === size.ket ? "bg-[#6A4029] text-white font-semibold w-[70px] h-[70px] flex justify-center items-center rounded-full":"bg-[#FFBA33] w-[70px] h-[70px] flex justify-center items-center font-semibold rounded-full"} onClick={() =>{
                          if (booking.find((sizeProduct) => sizeProduct === size.ket)) {
                            setBooking(prev => prev.filter((sizeProduct) => sizeProduct !== size.ket))  
                            &  setChart(prev => prev.filter((sizeProduct) => sizeProduct.size !== size.ket))
                        } else {
                            setBooking(prev => [...prev, size.ket]) & setChart(prev => [...prev, {product: item.product_name, size:size.ket,price:item.product_price}])
                        }
                        }}>
                         
                          {size.code}

                        </div>
                      )
                    })}
                  </div>
                  {/* <Choose size={data.size}/> */}
                </div>
              </div>
              <div className='flex mx-auto container py-10 mb-10'  >
                <div className='flex flex-col w-5/12 justify-center items-center'>
                  <button className='w-6/12 bg-[#6A4029] py-3 text-2xl text-white font-bold rounded-xl '>
                    Add to cart
                  </button>
                  <button className='w-6/12 mt-4 bg-[#FFBA33] py-3 text-2xl text-[#6A4029] font-bold rounded-xl '>
                    Ask a Staff
                  </button>

                </div>
                <div className='w-6/12 justify-evenly items-center flex flex-col'>
                  <div className='text-xl text-black font-bold'>
                    Choose Delivery Methods
                  </div>
                  <div className='flex my-4'>
                    <div>
                      <button onClick={(e) => setDelivery('Dine In')} className= {delivery === 'Dine In'?  'py-3 rounded-lg bg-[#6A4029] px-5 mr-4 ':  'py-3 rounded-lg bg-white px-5 mr-4 '}>Dine in</button>
                    </div>
                    <div>
                      <button onClick={(e) => setDelivery('Door Delivery')} className= {delivery === 'Door Delivery'?  'py-3 rounded-lg bg-[#6A4029] px-5 mr-4 ':  'py-3 rounded-lg bg-white px-5 mr-4'}>Door Delivery</button>
                    </div>
                    <div>
                      <button onClick={(e) => setDelivery('Pick Up')}className= {delivery === 'Pick Up'?  'py-3 rounded-lg bg-[#6A4029] px-5 mr-4 ':  'py-3 rounded-lg bg-white px-5 mr-4 active:bg-red-500'}>Pick up</button>
                    </div>
                    
                  </div>
                  <div className='w-7/12 flex'>
                    <p className='mr-4'>Set time :</p>
                    <input className='bg-transparent border-b-2 border-black outline-none'  onChange={(e) => setTime(e.target.value)} />
                  </div>

                </div>
              </div>
            </div>
            <div className='container w-8/12   mx-auto'>
              <div className=' w-full relative top-16 mx-auto flex '>
                <div className='w-8/12 justify-center items-center  flex bg-white shadow-2xl rounded-lg py-4 px-4'>
                  <div className='w-3/12'>
                    <Image className="rounded-full" src={`http://localhost:1111/upload/${item.product_image}`} width={100} height={100} />
                  </div>
                  <div className='w-3/12  h-full text-center flex justify-start'>
                    <div className='flex-col  justify-start items-start'>
                      <div className='text-2xl font-bold '>
                        {item.product_name}
                      </div>
                      <div className=' text-left'>{booking?.map((item) =>{
                        return(
                          <div> {item}</div>
                        )
                      })}</div>
                    </div>
                  </div>
                  <div className='w-3/12  flex justify-between'>
                    <div className='w-[40px] h-[40px] flex text-center justify-center items-center  font-bold rounded-full bg-[#FFBA33]' onClick={count >= initial ? () => setCount(count - 1) : setCount(initial)}>
                      -
                    </div>
                    <div className=' flex text-center font-bold justify-center items-center  '>
                      {count}
                    </div>
                    <div className='w-[40px] h-[40px] flex  font-bold text-center justify-center items-center  rounded-full bg-[#FFBA33]' onClick={() => setCount(count + 1)}>
                      +
                    </div>
                    {/* <button >-</button>
                    <button >+</button> */}
                  </div>
                </div>
                <div className='ml-7 w-2/12 rounded-lg bg-[#FFBA33] px-4 flex flex-col justify-center '>
                  <div onClick={(e) => handleCheckout(item)} className=' text-center  text-lg font-bold'>
                    CHECKOUT
                  </div>

                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Layout>




  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  let data = []
  try {
    const results = await axios({
      method: 'GET',
      url: `http://localhost:1111/api/v1/product/${id}`
    })

    data = results.data
    console.log(data)
  } catch (err) {
    console.log(err, 'ini error')
  }

  return {
    props: { data }
  }
}
