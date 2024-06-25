import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Callapi from '../utils/CallApi'
import ProductDetails from './ProductDetails'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/cartSlice'

const Productpage = () => {
  const{ id }= useParams()
  const [product,setProduct]=useState(null)

  const gateProduct = ()=>{
    Callapi('data/products.json')
    .then((res)=>{
      setProduct(res[id])
    })
  }
  useEffect(()=>{
    gateProduct()
  },[])

  const dispatch = useDispatch()

  const [quantity,setQuantity]=useState(1)

  const addQuantityproduct=()=>{
    setQuantity(product.quantity =quantity)

    return product
  }
  return (
    product &&
    <div className='h-screen bg-amazon-background'>
        <div className='min-w-[100px] max-w-[1500px] m-auto p-4'>
              <div className='grid grid-cols-10'>
                    <div className='col-span-3 p-8 rounded  bg-white m-auto'>
                          <img src={`${product.image}`}/>
                    </div>
                    <div className='col-span-5 p-4 rounded bg-white divide-y divide-gray-400'>
                        <div className='mb-3'>
                            <ProductDetails product={product} ratings={true}/>
                        </div>
                        <div className='text-base xl:text-lg mt-3'>
                          {product.description}
                        </div>
                    </div>
                    <div className='col-span-2 p-4 rounded bg-white'>
                          <div className='text-xl xl:text-2xl font-serif text-red-700 text-right'><span>₹</span>{product.price}</div>
                          <div className='text-base xl:text-lg font-serif text-gray-500 text-right line-through'>{product.oldPrice}</div>
                          <div className='text-sm xl:text-base font-serif text-blue-500 mt-3'>FREE Return</div>
                          <div className='text-sm xl:text-base font-serif text-blue-500 mt-1'>FREE Delivery</div>
                          <div className='text-base xl:text-lg text-green-700 mt-1'>In Stock</div>
                          <div className='text-base xl:text-lg mt-1 bg-white  '>Quantity:
                            <select onChange={(e)=>setQuantity(e.target.value)} className=' p-2 border rounded-md focus:border-indigo-600'>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                          </div>
                          <Link to={'/Checkout'}>
                          
                          <button onClick={()=>dispatch(addToCart(addQuantityproduct()))} className='bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3'>Add to Cart</button>
                          </Link>
                    </div>
              </div>
        </div>
    </div>
  )
}

export default Productpage