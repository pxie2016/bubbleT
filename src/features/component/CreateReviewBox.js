import React from 'react'
import {Form, Button, Card} from'react-bootstrap';
function CreateReviewBox() {
  return (
    <div>
        <Card style={{ width: '90vh' }}>
            <Card.Header>Create a review</Card.Header>
            <Card.Body>
                <Form >

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Text className="text-muted">
                            Rate for this place
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Range style={{ width: '30%' }}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control as="textarea" placeholder="say something"  />
                    </Form.Group>
        
                    <Button variant="primary" type="submit">Submit</Button>

                </Form>
            </Card.Body>
        </Card>

  </div>
  )
}

export default CreateReviewBox