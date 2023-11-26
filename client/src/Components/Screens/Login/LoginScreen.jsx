import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../../FormContainer";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Login } from "../../../Store/userSlice";
import { useNavigate } from 'react-router'
 import{toast} from 'react-toastify'
const LoginScreen = () => {
    const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(8, "Must be atleast 8 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const response = await dispatch(Login(values));
      console.log(response)
      if(response?.payload?.message==='success'){
        toast.success("Logged In Successfully !")
        navigate('/home')
        console.log("h");
      }else{
        toast.error("Invalid credentials !! Please Try again")
      }
    },
  });

 
  
  const dispatch = useDispatch();
  

  return (
    <Formik>
    <FormContainer>
      <h1>Sign In</h1>
      
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
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

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
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

        <Button type="submit" variant="primary" className="mt-3">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer? <Link to={`/register`}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
    </Formik>
  );
};

export default LoginScreen;
