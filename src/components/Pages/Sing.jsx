import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Sing = () => {

    // function style(){
    //     const myStyle = {
              
    //       backGround: "url(back.avif) left top no-repeat",
    //       padding: "15px",
    //       backGroundsize: "50px, 130px , auto",
        
    //   };
    //   }
 
  return (
    <>
    <div className='bg-image'>

    <Container className='col md-3' >

    
      <div className="row mb-3" controlId="formBasicEmail">
        <div><div>Enter Your Email</div>
        <input type="email" placeholder="Enter email" />
        </div>
      </div>

      <div className="row mb-3" controlId="formBasicPassword">
        <div><div>Password</div>
        <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="row mb-3" controlId="formBasicCheckbox">
       <div> <Form.Check type="checkbox" label="Check me out" />     </div>
      </div>
      <Button variant="primary" type="submit">
        sign in
      </Button>
    </Container>
    {/* <img className="d-block w-100"src={process.env.PUBLIC_URL + '/back.avif'} alt="Back Ground"/> */}
    </div>
    
    </>
  )
}

export default Sing