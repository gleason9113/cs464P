import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Search() { 
    return (
      <div>
        <div className="container align-items-center">
          <Form>
            <h1>Search</h1>
            <Form.Group className="mb-3" controlId="formSearch">
              <Form.Label>Search for Character: </Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>           
            <p>
                Under Construction
            </p>
        </div>
      </div>     
    );
  }