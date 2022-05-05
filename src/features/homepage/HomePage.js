import ShopCard from '../component/ShopCard'
import {useSelector, useDispatch} from "react-redux";
import {fetchAllShops, selectAllShops, getShopByUser} from './homePageSlice'
import React, { useEffect } from 'react'
function HomePage() {

    let fakeEntry = [
        {
            title: 'TP Tea',
            picture: 'https://media.istockphoto.com/photos/milk-tea-or-thai-tea-or-bubble-tea-and-iced-coffee-picture-id1317114135?b=1&k=20&m=1317114135&s=170667a&w=0&h=ODy7hQIJK-J5S2Z-ar09guU-pc0C2-v3tnf-sckItLY=',
            rating: '90',
            date: '04/03/2022',
            description: 'yum!',
        },
        {
            title: 'Yan Tea',
            picture: 'https://media.istockphoto.com/photos/bubble-milk-tea-on-wooden-table-picture-id1174549219?b=1&k=20&m=1174549219&s=170667a&w=0&h=Jt3t5KYZ7kQ_YHCgbqj7Qyl7OaluGdeo7b4FmYtL1A4=',
            rating: '85',
            date: '04/03/2022',
            description: 'good',
        },
        {
            title: 'Share Tea',
            picture: 'https://images.unsplash.com/photo-1525803377221-4f6ccdaa5133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnViYmxlJTIwdGVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            rating: '70',
            date: '04/03/2022',
            description: 'so so',
        }]

    let allShops = useSelector(selectAllShops);
    const dispatch = useDispatch();
    

    return (
        <div>
            <div className='homepage' onLoad={() => dispatch(fetchAllShops())}>
                <div>
                    {allShops.map((shop) => {
                        return <ShopCard key={shop._id} title={shop.name} date={shop.createdAt}
                                         description={shop.description}
                                         rating={shop.rating} id={shop._id}
                                         creator={shop.creator}/>
                    })}
                </div>
                {fakeEntry.map((shop) => {
                    return <ShopCard key={shop.title} title={shop.title} date={shop.date} picture={shop.picture}
                                     description={shop.description}
                                     rating={shop.rating}/>;
                })}
            </div>
        </div>
    )
}

export default HomePage;