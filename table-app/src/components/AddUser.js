

import React from 'react'
import {
Form,
FormGroup,
Label,
Input,
Button
} from 'reactstrap';
// import {Link} from 'react-router';

const AddUser = () => {
  return (
    <Form>
      <FormGroup>

        <Label>Name:</Label>
        <Input type='text' placeholder='Enter your Name'></Input>
        <Label>Capacity:</Label>
        <Input type='text' placeholder='Enter number of Capacity'></Input>
        <Label>Status:</Label>
        <Input type='checkbox'></Input><br/>
        <Label>Image: <Button type='btn btn-white'>Choose File</Button></Label>
        
      </FormGroup>
      <Button type='submit'>Create Table</Button>
      {/* <Link to="/home" className="btn btn-danger">Cancel</Link> */}
      <button className='btn btn-danger' type='submit'><a href="/home">Cancel</a></button>
    </Form>
  )
}

export default AddUser