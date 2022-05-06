import ShopCard from '../component/ShopCard'
import {useSelector, useDispatch} from "react-redux";
import {fetchAllShops, selectAllShops} from './homePageSlice'
import React from 'react'

function HomePage() {

    let allShops = useSelector(selectAllShops);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='homepage' onLoad={() => dispatch(fetchAllShops())}>
                {[...allShops].sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt)
                }).map((shop) => {
                    return <ShopCard key={shop._id} title={shop.name} date={shop.createdAt}
                                     description={shop.description}
                                     rating={shop.rating} id={shop._id}
                                     creator={shop.creator}/>
                })}
            </div>
        </div>
    )
}

export default HomePage;