import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { deleteShop } from '../homepage/homePageSlice';
import {useDispatch} from "react-redux";
import {toast} from 'react-toastify'

function ShopCard(props) {
    const authorOption = []
    const dispatch = useDispatch()
    function handleDelete(e, shopId){
        if(window.confirm("do you want to delete this shop??")){
            console.log(shopId)
            dispatch(deleteShop({shopId, toast}))
        }
    }

    if(props.author){
        authorOption.push(<Card.Link href={'/editShop/' + props.id}>edit</Card.Link>)
        authorOption.push(<Button onClick={(e)=>{handleDelete(e, props.id)}}>delete</Button>)
    }
    
    return (
        <div className='entry'>
            <Card style={{width: '30rem'}}>
                <Card.Img variant="top" src={props.picture}/>
                <Card.Body >
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{`${props.creator}  ${props.date}`}</Card.Subtitle>
                    
                    <Card.Text className="mb-2 text-muted">{}</Card.Text>
                    <Card.Text className="mb-2 text-muted">{props.rating}/100</Card.Text>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Link href={'/shoppage/' + props.id}>details</Card.Link>
                    {authorOption}
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default ShopCard