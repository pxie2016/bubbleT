import React from 'react';
import {fetchShopInfoById, selectAllState, selectShopId} from "./individualShopPageSlice";
import {useDispatch, useSelector} from "react-redux";
import {Card} from "react-bootstrap";
import ReviewBox from "../component/ReviewBox";
import CreateReviewBox from "./CreateReviewBox";

export function IndividualShopPage() {

    const dispatch = useDispatch();
    let id = useSelector(selectShopId);
    let allState = useSelector(selectAllState);
    if (allState.name === "") {
        dispatch(fetchShopInfoById(id));
    }
    console.log(allState);
    const {user} = useSelector((state)=>({...state.user}))
    let createReviewBox = ""
    if (user){
    createReviewBox = <div className='create-review'><CreateReviewBox/></div>
    }return (
        <div className="shoppage">
            <div>
                <Card border="light" style={{width: '70%', height: '60vh'}}>
                    <Card.Body>
                        <h1>{allState.name}</h1>
                        <div className='rightside'>
                            <Card.Subtitle className="mb-2 text-muted">{allState.creator}</Card.Subtitle>
                            <Card.Subtitle
                                className="mb-2 text-muted">{allState.createdAt.substring(0, 10)}</Card.Subtitle>
                            <Card.Subtitle className="mb-2">Rating: {allState.rating}/100</Card.Subtitle>
                            <Card.Subtitle className="mb-2">Address: {allState.address}</Card.Subtitle>
                            <Card.Subtitle className="mb-2">City: {allState.city}, State: {allState.state}, Zipcode: {allState.zipcode}</Card.Subtitle>
                            <br></br>
                        </div>
                        <Card.Text>
                            <br></br>
                             {allState.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className='review-container'>

                    {allState.allReviews.map((review, idx) => {
                        return <ReviewBox key={review.id + String(idx)} username={review.creator} content={review.content} date={review.createdAt}/>
                    })}
                    {createReviewBox}
                </div>
            </div>
        </div>
    );
}


