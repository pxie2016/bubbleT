import React from 'react';
import {fetchShopInfoById, selectAllState, selectShopId} from "./individualShopPageSlice";
import {useDispatch, useSelector} from "react-redux";
import {Card} from "react-bootstrap";

export function IndividualShopPage() {

    const dispatch = useDispatch();
    let id = useSelector(selectShopId);
    let allState = useSelector(selectAllState);
    if (allState.name === "") {
        dispatch(fetchShopInfoById(id));
    }
    console.log(allState);

    return (
        <div className="shoppage">
            The id of this store is {id}
            <Card border="light" style={{width: '70%', height: '100vh'}}>
                <Card.Body>
                    <h1>{allState.name}</h1>
                    <div className='rightside'>
                        <Card.Subtitle className="mb-2 text-muted">{allState.creator}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{allState.createdAt.substring(0, 10)}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Rating: {allState.rating}/100</Card.Subtitle>
                        <br></br>
                    </div>
                    <Card.Text>
                        <br></br>
                    Tada! {allState.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

// <div className='review-container'>
//     <ReviewBox title="not so good" username="user123" content="i dont like this place!!"
//                date="05/03/2022"/>
//     <ReviewBox title="not so good" username="user123" content="i dont like this place!!"
//                date="05/03/2022"/>
//     <ReviewBox title="not so good" username="user123" content="i dont like this place!!"
//                date="05/03/2022"/>
//
// </div>
// <div className='create-review'>
//     <CreateReviewBox/>
// </div>