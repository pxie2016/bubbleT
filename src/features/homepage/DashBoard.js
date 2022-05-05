import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShopCard from '../component/ShopCard'
import {getShopsByUser} from './homePageSlice'

function DashBoard() {

    const {user} = useSelector((state)=>({...state.user}))
    const {userShops} = useSelector((state)=>({...state.homepage}))
    const userId = user?.result._id
    const dispatch = useDispatch()

    useEffect(()=>{
        if (userId) {
            dispatch(getShopsByUser(userId))
        }
    }, [userId])



    console.log(userShops)
  return (
    <div>
        <h3>Your post:</h3>
        {userShops&&userShops.map((item)=>(
            <ShopCard key={item._id} title={item.name} date={item.createdAt}
            description={item.description}
            rating={item.rating} id={item._id}
            creator={item.creator}/>
        ))}
        

    </div>
  )
}

export default DashBoard