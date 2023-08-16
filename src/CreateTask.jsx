import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateTask() {
  return (
    <div className='taskdiv'>
        <Form className='taskform'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Todo Top</Form.Label>
                <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Todo textarea</Form.Label>
                <Form.Control  placeholder="write your to do" as="textarea" rows={3} />
            </Form.Group>
            <Button size="lg" variant="outline-info">Add</Button>

        </Form>
    </div>
  )
}

export default CreateTask