import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import Add from './Admin/Category/Add';
// import Products from '../Moduls/Products';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Home = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100"src={process.env.PUBLIC_URL + '/ecom.jpg'} alt="First silde" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100"src={process.env.PUBLIC_URL + '/ecommerce1.jpg'} alt="Second silde" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <img className="d-block w-100"src={process.env.PUBLIC_URL + '/money.jpg'} alt="Third silde" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* <Products/> */}
    
    </>
  )
}

export default Home