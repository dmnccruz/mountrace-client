import React, { useState, useContext } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks'

function Login(props) {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({})

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        username: "",
        password: ""
    })

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, {data: {login: userData}}){
            context.login(userData)
            // props.history.push('/screening')
            // window.location.reload();
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values 
    })
    
    function loginUserCallback() {
        loginUser();
    }

    return (
        <>
        <div className="form-container loginContainer">
            <div>
                <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ''}>
                    <h1>Login</h1>
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
                    <Button fluid className="loginButton" type="submit">
                        Sign in
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
        </div>
        <div className="loginContainer2">
            <div className="loginContainer3">
                <p className="loginQuestion">Don't have an account? <span onClick={props.onClick}>Sign up!</span></p>
            </div>
        </div>
        </>
    );
}

const LOGIN_USER = gql`
mutation login(
    $username: String!
    $password: String!
){
    login(
        username: $username
        password: $password
    ){
        id email username createdAt token responded condition firstName lastName role
    }
}
`

export default Login;

