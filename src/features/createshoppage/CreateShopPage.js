import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col} from'react-bootstrap';
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {createShop} from './createShopPageSlice';
function CreateShopPage() {
    const initialState = {
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        creator:"",
        imgFile:"",
        description:"",
        // stars: {type: Number, min: 1., max: 5.},
        // likeCount:{
        //     type:Number,
        //     default:0
        // }
    }


    const [shop, setShop] = useState(initialState)
    const{name,address,city,state, zipcode,creator, imgFile, description} = shop


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const{error} = useSelector((state)=>({...state.shop}))
    const{user} = useSelector((state)=>({...state.user}))


    useEffect(()=>{
        error&&toast.error(error)
    },[error])

    function handleInput(e, name){
        
        const value = e.target.value

        setShop({...shop,[name]:value})
    }
    function handleSubmit(e){
        e.preventDefault();
        const shopData = {...shop, creator:user?.result?.username}
        console.log(shopData)
        dispatch(createShop({shopData, navigate, toast}))
        setShop(initialState)
    }

  return (
    <div>
        <div className='create-shop-page'>

            <Form >
                <Form.Group className="mb-3" onChange={e=>handleInput(e, "name")}>
                    <Form.Label>Shop Name</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group className="mb-3"  onChange={e=>handleInput(e, "address")}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} onChange={e=>handleInput(e, "city")}>
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} onChange={e=>handleInput(e, "state")}>
                    <Form.Label>State</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} onChange={e=>handleInput(e, "zipcode")}>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" onChange={e=>handleInput(e, "description")}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="say something" rows={7} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Text className="text-muted">
                        Overall Rating
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" onChange={e=>handleInput(e, "rating")}>
                    <Form.Range style={{ width: '30%' }}/>
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Upload a picture?</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={e=>handleSubmit(e)}>Submit</Button>

            </Form>
            <ToastContainer/>

        </div>
    </div>
  )
}

export default CreateShopPage