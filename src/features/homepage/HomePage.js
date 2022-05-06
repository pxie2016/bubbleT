import ShopCard from '../component/ShopCard'
import {useSelector, useDispatch} from "react-redux";
import {fetchAllShops, selectAllShops} from './homePageSlice'
import React, {useEffect} from 'react'

function HomePage() {

    let allShops = useSelector(selectAllShops);
    const dispatch = useDispatch();
    console.log(allShops);
    useEffect(() => {
        dispatch(fetchAllShops())
    }, [])

    return (
        <div>
            <h1>Bubble T, a bubble tea review site</h1>
            <div className='homepage'>
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