import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import Search from './Search'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {

    const i = useSelector((state)=>state.cart.productsNumber)

  return (
    <header className='min-w-[1000px]'>
        <div className='flex bg-amazon text-white h-[60px]'>
                <div className='flex items-center m-4'>
                    <Link to={'/'}>
                    <img className='h-[35px] w-[100px] m-2' src={"../images/amazon.png"} alt="" />
                    </Link>
                        <div className='pr-4 pl-4'>
                            <div className='text-xs xl:text-sm'>Delivar to</div>
                            <div className='text-sm xl:text-base font-bold'>India</div>
                        </div>
                </div>
                <div className='flex grow relative items-center'>
                    <Search/>      
                </div>
                <div className='flex items-center m-4'>
                        <div className='pr-4 pl-4'>
                            <div className='text-xs xl:text-sm'>Hello, sign in</div>
                            <div className='text-sm xl:text-base font-bold'>Accounts & list</div>
                        </div>
                        <div className='pr-4 pl-4'>
                            <div className='text-xs xl:text-sm'>Retuns</div>
                            <div className='text-sm xl:text-base font-bold'>& Orders</div>
                        </div>
                        <Link to={'/Checkout'}>
                        <div className='flex pr-3 pl-3'>
                            <ShoppingCartIcon className='h-[48px]'/>
                            <div className='relative'>
                                <div className='absolute right-[9px] font-bold m-2 text-orange-400'>
                                    {i}
                                </div>
                            </div>
                            <div className='mt-7 text-xl xl:text-sm font-bold'>
                                Cart
                            </div>
                        </div>
                        </Link>
                </div>
                
        </div>
        <div className='flex space-x-3 text-xs xl:text-sm p-2 pl-6 bg-amazon-ligh_blue text-white'>
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
        </div>
    </header>
  )
}

export default Navbar