import React from 'react'
import {useParams} from "react-router-dom";
import {IndividualShopPage} from "./IndividualShopPage";
import {useDispatch} from "react-redux";
import {setId} from "./individualShopPageSlice";
import {store} from "../../app/store";

function ShopPage() {

    let shopIdObject = useParams();
    let shopIdFromURI = shopIdObject.id;
    const dispatch = useDispatch();
    if (store.getState().individualshoppage.id === "") {
        dispatch(setId(shopIdFromURI))
    }

    return (
        <div>
            <IndividualShopPage/>
        </div>
    )
}

export default ShopPage