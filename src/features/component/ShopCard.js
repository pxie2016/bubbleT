import React from 'react'
import {Card} from 'react-bootstrap';

function ShopCard(props) {

    return (
        <div className='entry'>
            <Card style={{width: '30rem'}}>
                <Card.Img variant="top" src={props.picture}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{props.rating}/100</Card.Subtitle>
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