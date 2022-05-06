import React, {useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap';
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {createReviewBox} from "./individualShopPageSlice";


function CreateReviewBox() {
    let shopIdObject = useParams();
    const initialState = {
        id: shopIdObject.id,
        content:""
    }
    const [reviewBox, setReviewBox] = useState(initialState);
    const {content} = reviewBox;
    const dispatch = useDispatch();
    const {user} = useSelector((state)=>({...state.user}))

    function handleInput(e, name) {
        const value = e.target.value
        setReviewBox({...reviewBox,[name]:value})
    }

    function handleSubmit(e){
        e.preventDefault();
        const reviewBoxData = {...reviewBox, creator:user?.result?.username}
        dispatch(createReviewBox({reviewBoxData, toast}))
        setReviewBox(initialState)
    }

return (
        <div>
            <Card style={{width: '90vh'}}>
                <Card.Header>Create a review</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" onChange={e=>handleInput(e, "content")}>
                            <Form.Control as="textarea" placeholder="say something"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={e=>handleSubmit(e)}>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    )
}

export default CreateReviewBox