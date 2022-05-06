import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col} from'react-bootstrap';
import {useSelector, useDispatch} from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {createShop} from './createShopPageSlice';
import {getShopsByUser, updateShop} from '../homepage/homePageSlice'
function CreateShopPage() {
    const initialState = {
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        creator:"",
        description:"",
        rating:""
    }


    const [shop, setShop] = useState(initialState)
    const{name,address,city,state, zipcode,creator, description, rating} = shop
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const{user} = useSelector((state)=>({...state.user}))
    const {userShops} = useSelector((state)=>({...state.homepage}))
    const userId = user?.result._id
    useEffect(()=>{
        if (userId) {
            dispatch(getShopsByUser(userId))
        }
    }, [userId])
    
    
    const{id} = useParams()

    useEffect(()=>{
        if(id){
            const currentShop = userShops.find((ashop)=> ashop._id ===id)
            setShop({...currentShop})
            console.log(rating)
        }
    }, [id,userShops])
    
    function handleInput(e, name){
        
        const value = e.target.value
        setShop({...shop,[name]:value})
    }

    function handleSubmit(e){
        e.preventDefault();
        const shopData = {...shop, creator:user?.result?.username}
        if(!id){
            dispatch(createShop({shopData, navigate, toast}))
            
        } else{
            let shopId = id
            let updatedShop = shopData
            dispatch(updateShop({shopId,updatedShop, toast, navigate}))
        }
        setShop(initialState)
    }

  return (
    <div>
        <div className='create-shop-page'>
                <br></br>
                <br></br>
                <h1>{id?"Update a shop":"Add a new shop"}</h1>
            <Form >
                <Form.Group className="mb-3" onChange={e=>handleInput(e, "name")}>
                    <Form.Label>Shop Name</Form.Label>
                    <Form.Control type="text" defaultValue={name} />
                </Form.Group>
                <Form.Group className="mb-3"  onChange={e=>handleInput(e, "address")}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" defaultValue={address}/>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} onChange={e=>handleInput(e, "city")}>
                    <Form.Label>City</Form.Label>
                    <Form.Control defaultValue={city}/>
                    </Form.Group>

                    <Form.Group as={Col} onChange={e=>handleInput(e, "state")}>
                    <Form.Label>State</Form.Label>
                    <Form.Control defaultValue={state}/>
                    </Form.Group>

                    <Form.Group as={Col} onChange={e=>handleInput(e, "zipcode")}>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control defaultValue={zipcode}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" onChange={e=>handleInput(e, "description")}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="say something" rows={7} defaultValue={description}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Text className="text-muted">
                        Overall Rating
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Range style={{ width: '30%' }} onChange={e=>handleInput(e, "rating")} defaultValue={rating}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={e=>handleSubmit(e)}>{id?"Update":"Submit"}</Button>

            </Form>
            <ToastContainer/>

        </div>
    </div>
  )
}

export default CreateShopPage