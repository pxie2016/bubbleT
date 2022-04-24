import React from 'react'
import {Form, Card, Button} from'react-bootstrap';
import NavBar from './Navbar';
function CreateEntryPage() {
  return (
    <div>
        <NavBar/>
        <div className='create-entry-page'>
            <Card style={{ width: '80vh' }}>
                <Card.Header>Create a new post</Card.Header>
                <Card.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="content">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" placeholder="say something" rows={10} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Text className="text-muted">
                                Overall Rating
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="rating">
                            <Form.Range style={{ width: '30%' }}/>
                        </Form.Group>
                        
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Upload a picture?</Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>

                    </Form>
                </Card.Body>
                </Card>
        </div>
    </div>
  )
}

export default CreateEntryPage