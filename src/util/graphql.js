import gql from 'graphql-tag';

export const FETCH_SCREENS_QUERY = gql`
{
    getScreens {
        id
        createdAt
        age
        firstName
        lastName
        address
        mobile
        temp
        travel
        symptoms 
    }
}
`
export const FETCH_USERS_QUERY = gql`
{
    getUsers {
        id
        firstName
        lastName
        responded
        condition
        createdAt
        email
        role
        username
    }
}
`