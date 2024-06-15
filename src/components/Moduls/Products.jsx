import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const Products = () => {

    const [items,] = useState([
        {
            id:1,
            product_name:"Product1",
            price:999,
            image:"/iphone.jpg",
        },

        {
            id:2,
            product_name:"Product2",
            price:1999,
            image:"/images.jpeg"
        },
    ])
  return (
    <Container className='row'>
        {items.map((elem) =>
        {
            return (
            <Card key={elem.id} className='col-3'>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + elem.image}/>
                <Card.Body>
                    <Card.Title>{elem.product_name}</Card.Title>
                    <Card.Text>${elem.price}</Card.Text>
                    <Button variant='primary'>Buy</Button>
                    <Button variant='danger'>Cancel</Button>

                </Card.Body>
            </Card>
            );
        })}
    </Container>
)


}

export default Products