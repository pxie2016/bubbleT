import React from 'react'
import CreateReviewBox from '../component/CreateReviewBox'
import ReviewBox from '../component/ReviewBox';
import {Card} from'react-bootstrap';
function EntryPage() {
  return (
      
    <div>
        <div className='entrypage'>
        <Card border="light" style={{ width: '70%',hight:'100vh' }}>
            <Card.Body>
                <h1>TP Tea</h1>
                <div className='rightside'>
                <Card.Subtitle className="mb-2 text-muted">user1</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">04/02/2022</Card.Subtitle>
                <Card.Subtitle className="mb-2">Rating: 9/10</Card.Subtitle>
                <br></br>
                </div>
                <Card.Img variant="top" src="https://media.istockphoto.com/photos/milk-tea-or-thai-tea-or-bubble-tea-and-iced-coffee-picture-id1317114135?b=1&k=20&m=1317114135&s=170667a&w=0&h=ODy7hQIJK-J5S2Z-ar09guU-pc0C2-v3tnf-sckItLY=" />
                
                <Card.Text>
                <br></br>
                
                This concept originates from the tea culture in the Tang Dynasty, which means serving tea in gatherings. 
                TP TEA was founded in Taichung, Taiwan in July 2005. 
                TP TEA, while intending to honor the tea-drinking culture from the Tang Dynasty among the literati, 
                utilizes its decades of experience in tea blending to create quality tea that are easily available, giving the general public a glimpse of the literati gatherings in ancient China.
                </Card.Text>
                
            </Card.Body>
        </Card>
        <div className='review-container'>
        <ReviewBox title="not so good" username="user123" content="i dont like this place!!" date="05/03/2022"/>
        <ReviewBox title="not so good" username="user123" content="i dont like this place!!" date="05/03/2022"/>
        <ReviewBox title="not so good" username="user123" content="i dont like this place!!" date="05/03/2022"/>
        
        </div>
        <div className='create-review'>
            <CreateReviewBox/>
        </div>
        </div>
    </div>
  )
}

export default EntryPage