import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import axios from 'axios';

export default function AddNewMovie() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        axios
            .post(`https://localhost:44368/post`, data)
            .then(response => {
                console.log(response);

                alert(
                    "Jauna filma ir pievienota" + '\n' +
                    "Attēla URL: " + response.data.img + '\n' +
                    "Filmas nosaukums: " + response.data.title + '\n' +
                    "Filmas Apraksts: " + response.data.description
                );
            })
    }

    return (
        <React.Fragment>
            <h2>Pievienot jaunu filmu</h2>
            <Form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name="img" placeholder="Image URL" ref={register}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Movie Title"
                        ref={register}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        placeholder="Movie Description"
                        ref={register}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </React.Fragment>
    )
}

// class AddNewMovie extends React.Component {     render() {         const
// {register, handleSubmit} = useForm();         return ( <React.Fragment>
// <h2>Pievienot jaunu filmu</h2> <Form className="mb-5"> <Form.Group>
// <Form.Label>Image URL</Form.Label> <Form.Control type="text"
// placeholder="Image URL"/> </Form.Group> <Form.Group>
// <Form.Label>Title</Form.Label> <Form.Control type="text" placeholder="Movie
// Title"/> </Form.Group>                     <Form.Group>
// <Form.Label>Description</Form.Label>                         <Form.Control
// type="text" placeholder="Movie Description"/> </Form.Group> <Button
// variant="primary" type="submit" onClick={this.postDataHandler}> Submit
// </Button>                 </Form>             </React.Fragment> ); } } export
// default AddNewMovie;