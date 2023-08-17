import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateTask(props) {
  const [task , setTask] = useState({
    title: "",
    content : "",
  })

  function detectChange(e) {
    const {name , value} = e.target;

    setTask((prevTask) =>{
      return {
        ...prevTask,
        [name] : value,
      }
    })
  }

  function submitTask(e) {
    props.onAdd(task) ;
    setTask({
      title:"",
      content:"",
    }),
    e.preventDefault();
  }

  return (
    <div className='taskdiv'>
        <Form className='taskform'>

            <Form.Group
             name= "title" 
             className="mb-3 todoText " 
             controlId="exampleForm.ControlInput1"
             value= {task.title}
             onChange={detectChange}
             >
             
                <Form.Label>Todo Top</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Form.Group 
            name="content" 
            className="mb-3  
            todoText" 
            controlId="exampleForm.ControlTextarea1"
            value= {task.content}
            onChange={detectChange}

            >
                <Form.Label>Todo textarea</Form.Label>
                <Form.Control  placeholder="write your to do" as="textarea" rows={3} />
            </Form.Group>

            <Button size="lg" variant="outline-info" onClick={submitTask}>Add</Button>

        </Form>
    </div>
  )
}

export default CreateTask