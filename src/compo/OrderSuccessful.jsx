import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

const OrderSuccessful = () => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
            const redirectTimer = setTimeout(() => {
                navigate('/')
            }, 3000)
            return () => clearTimeout(redirectTimer) 
        }, 3000)

        return () => clearTimeout(timer) 
    }, [navigate])

    return (
        <div className='h-full w-full flex justify-center my-[180px]'>
            {loading ? (
                <PropagateLoader />
            ) : (
                <div className='text-center'>
                    <h1 className='font-bold text-xl xl:text-xl'>Order Successful!</h1>
                    <p>Your order has been successfully placed</p>
                </div>
            )}
        </div>
    )
}

export default OrderSuccessful
