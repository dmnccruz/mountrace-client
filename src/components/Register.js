import React, { useState, useContext } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks'

function Register(props) {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({})

    const { onChange, onSubmit, values } = useForm(registerUser, {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, { data: {register: userData} }){
            context.login(userData)
            // props.history.push('/screening')
            window.location.reload();

        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values 
    })
    
    function registerUser() {
        addUser();
    }

    return (
        <>
        <div className="form-container registerContainer">
            <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ''}>
                <h1>Register</h1>
                <p>Basic information</p>
                
                <Form.Group>
                    <Form.Input 
                        placeholder="First Name"
                        name="firstName"
                        type="text"
                        value={values.firstName}
                        error={errors.firstName ? true : false}
                        onChange={onChange}
                        style={{width: '142.5px'}}
                    />
                    <Form.Input 
                        placeholder="Last Name"
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        error={errors.lastName ? true : false}
                        onChange={onChange}
                        style={{width: '142.5px'}}
                    />
                </Form.Group>
                
                <Form.Input 
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    error={errors.email ? true : false}
                    onChange={onChange}
                />

                <hr />
                <p>Account details</p>

                <Form.Input 
                    placeholder="Username"
                    name="username"
                    type="text"
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange={onChange}
                />
                <Form.Input 
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange}
                />
                <Form.Input 
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    error={errors.confirmPassword ? true : false}
                    onChange={onChange}
                />
                <Button fluid className="registerButton" type="submit" primary>
                    Register
                </Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className="list">
                        {Object.values(errors).map(value => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
        <div className="registerContainer2">
            <div className="registerContainer3">
                <p className="registerQuestion">Already have an account? <span onClick={props.onClick}>Log in!</span></p>
            </div>
        </div>
        </>
    );
}

const REGISTER_USER = gql`
mutation register(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
){
    register(
        registerInput: {
            username: $username
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
            confirmPassword: $confirmPassword
        }
    ){
        id email username firstName lastName createdAt token
    }
}
`

export default Register;

