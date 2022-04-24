import React from 'react'
import {Card} from 'react-bootstrap'

function ReviewBox(props) {
  return (
    <div>
    <Card border="secondary" style={{width:'90vh'}}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div className='rightside'>
        <Card.Subtitle className="mb-2 text-muted">{props.username}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
        </div>
        <Card.Text>
          {props.content}
        </Card.Text>
      </Card.Body>
    </Card>
</div>
  )
}

export default ReviewBox