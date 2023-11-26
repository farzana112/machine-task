import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../../FormContainer';
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Register } from '../../../Store/userSlice';
import { useNavigate } from 'react-router' ;
 import{toast} from 'react-toastify' ;
 

const RegisterScreen = () => {
  const navigate=useNavigate()
  // const formik=useFormik({
  //   initialValues: {
  //     name:"",
  //     userName:"",
  //     email: "",
  //     password: "",
  //     location:"",
  //     occupation:"",
  //     confirmPassword:""
  //   },
  //   validationSchema:{  validationSchema: Yup.object({
  //     name: Yup.string().required('Name is required'),
  //     email: Yup.string().email("Invalid email").required("Required"),
  //     password: Yup.string()
  //       .min(8, "Must be atleast 8 characters")
  //       .required("Required"),
  //        userName: Yup.string().required('Username is required'),
  //        location: Yup.string().required('Location is required'),
  //       occupation: Yup.string().required('Occupation is required'),
  // confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
  //   }),

  //   },
  //   onSubmit:async (values) => {
  //     const response = await dispatch(Register(values));
  //     console.log(response)
  //     if(response?.payload?.message==='success'){
  //       toast.success("Logged In Successfully !")
  //       navigate('/home')
  //       console.log("h");
  //     }else{
  //       toast.error("Invalid credentials !! Please Try again")
  //     }
  //   },
  // })
  const formik = useFormik({
    initialValues: {
      name: '',
      userName: '',
      email: '',
      password: '',
      location: '',
      occupation: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      userName: Yup.string().required('Username is required'),
      location: Yup.string().required('Location is required'),
      occupation: Yup.string().required('Occupation is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async (values) => {
      const response = await dispatch(Register(values));
      console.log("response !")
      console.log(response);
      if (response?.payload?.message === 'success') {
        toast.success('Logged In Successfully!');
        navigate('/home');
      } else {
        toast.error('Invalid credentials!! Please Try again');
      }
    },
  });


 
  const dispatch=useDispatch()

  return (
    <Formik>
    <FormContainer>
      <h1>Register</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></Form.Control>
        </Form.Group>
        {formik.touched.name && formik.errors.email ? (
              <p style={{ color: 'red' }}>
                {formik.errors.name}
                </p>
            ) : null}

        <Form.Group className='my-2' controlId='userName'>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter user name'
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></Form.Control>
        </Form.Group>

        {formik.touched.userName && formik.errors.userName ? (
              <p style={{ color: 'red' }}>
                {formik.errors.userName}
                </p>
            ) : null}

        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></Form.Control>
        </Form.Group>
        {formik.touched.email && formik.errors.email ? (
              <p style={{ color: 'red' }}>
                {formik.errors.email}
                </p>
            ) : null}
        <Form.Group className='my-2' controlId='location'>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter location'
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></Form.Control>
        </Form.Group>

        {formik.touched.location && formik.errors.location ? (
              <p style={{ color: 'red' }}>
                {formik.errors.location}
                </p>
            ) : null}
        <Form.Group className='my-2' controlId='occupation'>
          <Form.Label>Occupation</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter Occupation'
            value={formik.values.occupation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></Form.Control>
        </Form.Group>
        {formik.touched.occupation && formik.errors.occupation ? (
              <p style={{ color: 'red' }}>
                {formik.errors.occupation}
                </p>
            ) : null}
        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></Form.Control>
        </Form.Group>
        {formik.touched.password && formik.errors.password ? (
              <p style={{ color: 'red' }}>
                {formik.errors.password}
                </p>
            ) : null}
        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></Form.Control>
        </Form.Group>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p style={{ color: 'red' }}>
                {formik.errors.confirmPassword}
                </p>
            ) : null}

        <Button type='submit' variant='primary' className='mt-3'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Already have an account? <Link to={`/login`}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
    </Formik>
  );
};

export default RegisterScreen;
