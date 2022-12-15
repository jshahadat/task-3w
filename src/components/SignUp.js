import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsGithub } from "react-icons/bs";
const SignUp = () => {

    return (
        <div className='row mx-auto container'>
            <h2 className="fw-bold text-center my-5">Sign Up</h2>
            <Form className='mx-auto col-4 pb-5 pt-5 ' style={{ backgroundColor: '#fff' }}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button style={{ backgroundColor: '#9B1FE9' }} className='w-100' type="submit">Submit</Button>
            </Form>
            <p className='fw-bold text-center my-2'>Don't have an account? <Link to='/login' style={{ textDecoration: 'none', color: '#9B1FE9' }}>Login</Link></p>
            <p className="fw-bold text-center my-1">Or</p>
            <div className='text-center my-3' >
                <BsGithub style={{ height: '30px', width: '30px' }} ></BsGithub>
                <BsFacebook className='mx-3' style={{ height: '25px', width: '25px' }} ></BsFacebook>
                <AiFillInstagram style={{ height: '30px', width: '30px' }} ></AiFillInstagram>
            </div>
            <div className='text-center container'>
                <div className='mb-5 my-2 w-25 mx-auto' id='signInDiv'></div>
            </div>

        </div>
    );
};

export default SignUp;