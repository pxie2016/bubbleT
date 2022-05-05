import React from 'react'
import {Card} from 'react-bootstrap';

function ShopCard(props) {

    return (
        <div className='entry'>
            <Card style={{width: '30rem'}}>
                <Card.Img variant="top" src={props.picture}/>
                <Card.Body >
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{`${props.creator}  ${props.date.substring(0,10)}`}</Card.Subtitle>
                    
                    <Card.Text className="mb-2 text-muted">{}</Card.Text>
                    <Card.Text className="mb-2 text-muted">{props.rating}/100</Card.Text>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Link href={'/shoppage/' + props.id}>details</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ShopCard