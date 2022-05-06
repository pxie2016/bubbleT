import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShopCard from '../component/ShopCard'
import {getShopsByUser} from './homePageSlice'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function DashBoard() {

    const {user} = useSelector((state)=>({...state.user}))
    const {userShops} = useSelector((state)=>({...state.homepage}))
    const userId = user?.result._id
    const userName = user?.result.username
    const dispatch = useDispatch()
    useEffect(()=>{
        if (userId) {
            dispatch(getShopsByUser(userId))
        }
    }, [userId])

  return (
    <div>
        <h3>Hi {userName},  here are your posts:</h3>
        {userShops&&userShops.map((item)=>(
            <ShopCard key={item._id} title={item.name} date={item.createdAt}
            description={item.description}
            rating={item.rating} id={item._id}
            creator={item.creator} author={true}/>
        ))}
        <ToastContainer/>
    </div>
  )
}

export default DashBoard