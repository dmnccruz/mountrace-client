import React, { useContext } from 'react';

import { AuthContext } from '../context/auth';
import { FETCH_USERS_QUERY } from '../util/graphql';
import { useQuery } from '@apollo/react-hooks';

import LoginOrRegister from '../components/LoginOrRegister';
import ScreeningForm from '../components/ScreeningForm';
import MenuBar from '../components/MenuBar';
import '../App.css';

import Admin from '../components/Admin';

import Condition from '../components/Condition';

function Screening(props) {
    const { user } = useContext(AuthContext);
    function renderLoginOrRegister() {
        if(!user) {
            return (
                <LoginOrRegister />
            )
        }
        else {
            return (
                null
            )
        }
    }

    const {
        // loading2,
        data: { getUsers: usersFind } = {}
    } = useQuery(FETCH_USERS_QUERY);

    // console.log(usersFind)
    // console.log(user)

    if(usersFind && user) {
        usersFind.forEach(userFound => {
            if(userFound.id === user.id){
                // console.log(userFound.id)
                // console.log(userFound.responded)
                localStorage.setItem("responded", userFound.responded)
                localStorage.setItem("condition", userFound.condition)
            }
        })
    }

    function renderMap() {
        if(user && user.role==="admin") {
            return (
                <Admin />
            )
        }
        else if(user && user.role==="user" && usersFind && localStorage.getItem('responded') === 'false') {
            return (
                <ScreeningForm />
            )
        }
        else if(user && user.role==="user" && usersFind && localStorage.getItem('responded') === 'true' && localStorage.getItem('condition') === 'normal'){
            return (
                <Condition cn="conditionNormal" title="Congratulations! You are:" condition="Normal" description="Please still practice anti COVID measures like staying at home and staying far from highly populated areas."/>
            )
        }
        else if(user && user.role==="user" && usersFind && localStorage.getItem('responded') === 'true' && localStorage.getItem('condition') === 'pum'){
            return (
                <Condition cn="conditionPum" title="Caution! You are a:" condition="Person under Monitoring" description="Please stay at home and quarantine for 14 days."/>
            )
        }
        else if(user && user.role==="user" && usersFind && localStorage.getItem('responded') === 'true' && localStorage.getItem('condition') === 'pui'){
            return (
                <Condition cn="conditionPui" title="Warning! You are a:" condition="Person under Investigation" description="Please call an Ambulance or go to your nearest Hospital."/>
            )
        }
    }

    return (
        <>
            <MenuBar />
            {renderLoginOrRegister()}
            {renderMap()}
        </>
    );
}

export default Screening;

