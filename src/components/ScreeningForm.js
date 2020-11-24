import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/auth';

import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { useForm } from '../util/hooks'
import { FETCH_SCREENS_QUERY, FETCH_USERS_QUERY } from '../util/graphql';

function ScreeningForm() {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        function loadJs(url) {
            var script = document.createElement('script');
            script.src = url;
            script.setAttribute('async', 'true');
            document.documentElement.firstChild.appendChild(script);
        }
    
        const gUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCFaVtDi-0kmQMpxWThH-8HA_PU2jwUm8M&libraries=places&callback=initMap"
        
        // setTimeout(function() {
        loadJs(gUrl)
        // }, 1500)
    }, []);

    if(document.getElementById('submitSurvey')) {
        var submitSurvey = document.getElementById('submitSurvey')
        var address2 = document.getElementById('address2')
        var mobile = document.getElementById('mobile')
        var age = document.getElementById('age')
        var temp = document.getElementById('temp')
        var travel = document.getElementById('travel')

        address2.addEventListener('blur', function() {
            if(address2.value !== "" && mobile.value !== "" && age.value !== "" && temp.value !== "" && travel.value !== "") {
                submitSurvey.disabled = false;
            }
            else {
                submitSurvey.disabled = true;
            }
        })
        mobile.addEventListener('blur', function() {
            if(address2.value !== "" && mobile.value !== "" && age.value !== "" && temp.value !== "" && travel.value !== "") {
                submitSurvey.disabled = false;
            }
            else {
                submitSurvey.disabled = true;
            }
        })
        age.addEventListener('blur', function() {
            if(address2.value !== "" && mobile.value !== "" && age.value !== "" && temp.value !== "" && travel.value !== "") {
                submitSurvey.disabled = false;
            }
            else {
                submitSurvey.disabled = true;
            }
        })
        temp.addEventListener('blur', function() {
            if(address2.value !== "" && mobile.value !== "" && age.value !== "" && temp.value !== "" && travel.value !== "") {
                submitSurvey.disabled = false;
            }
            else {
                submitSurvey.disabled = true;
            }
        })
        travel.addEventListener('blur', function() {
            if(address2.value !== "" && mobile.value !== "" && age.value !== "" && temp.value !== "" && travel.value !== "") {
                submitSurvey.disabled = false;
            }
            else {
                submitSurvey.disabled = true;
            }
        })
    }

    function verifyAddress() {
        var initValue = document.getElementById('address2').value

        var input = document.getElementById('address1');
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(input, initValue + "&" + localStorage.getItem("address"));
        // nativeInputValueSetter.call(input, initValue);
        var ev2 = new Event('input', { bubbles: true});
        input.dispatchEvent(ev2);
        // console.log(localStorage.getItem("address"))
        // console.log(document.getElementById('address1').value)
    }
    
    const {
        loading,
        data: { getScreens: screens } = {}
    } = useQuery(FETCH_SCREENS_QUERY);

    const { values, onChange, onSubmit }  = useForm(createScreenCallback, {
        age: '',
        address: '',
        mobile: '',
        temp: '',
        travel: '',
        symptoms: ''
    });

    const [createScreen, { error }] = useMutation(CREATE_SCREEN_MUTATION, {
        variables: values,
        update(proxy, result) {
            const data = proxy.readQuery({
                query: FETCH_SCREENS_QUERY
            })
            proxy.writeQuery({ 
                query: FETCH_SCREENS_QUERY, 
                data: {
                    getScreens: [result.data.createScreen, ...data.getScreens],
                },
            })

            values.age = ''
            values.address = ''
            values.mobile = ''
            values.temp = ''
            values.travel = ''
            values.symptoms = ''

            user.responded = true
        }
    })

    // console.log(user.responded)

    function createScreenCallback() {
        createScreen();
    }

    function addSymptoms(e) {
        
        var submitSurvey = document.getElementById('submitSurvey')
        var address2 = document.getElementById('address2')
        var mobile = document.getElementById('mobile')
        var age = document.getElementById('age')
        var temp = document.getElementById('temp')
        var travel = document.getElementById('travel')

        // submitSurvey.disabled = true;

        if(address2.value !== "" && mobile.value !== "" && age.value !== "" && temp.value !== "" && travel.value !== "") {
            submitSurvey.disabled = false;
        }
    
        const symptomsChecks = document.getElementsByClassName('symptomsCheck')
        let symptomsArr = []

        Array.from(symptomsChecks).forEach((symptomsCheck) => {
            if(symptomsCheck.checked) {
                symptomsArr.push(symptomsCheck.getAttribute('data-name'))
            }
        });

        var input = document.getElementById('symptoms');
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(input, symptomsArr.toString());
        var ev2 = new Event('input', { bubbles: true});
        input.dispatchEvent(ev2);

        // console.log(input.value )
    }

    function renderForm() {
        if(user) {
            return (
                <div className="screenFormContainer">
                    <form className="screenForm" onSubmit={onSubmit}>
                        <div className="screenFormHeader">
                            <h1>Screening form</h1>
                        </div>
                        <div className="flNameContainer">
                            <input id="firstName" type="text" name="firstName" onChange={onChange} value={user.firstName} placeholder={user.firstName} disabled/>
                            <input id="lastName" type="text" name="lastName" onChange={onChange} value={user.lastName} placeholder={user.lastName} disabled/>
                        </div>
                        <input id="email" type="text" name="email" onChange={onChange} value={values.email} placeholder={user.email} disabled/>
                        
                        <input style={{position: 'absolute', opacity: '0'}} id="address1" type="text" name="address" onChange={onChange} value={values.address} placeholder="address" />

                        <div className="avContainer">
                            <input id="address2" type="text" name="address2" onChange={onChange} placeholder="enter address and verify" />

                            <div id="verify" onClick={verifyAddress}><p>Verify</p></div>
                        </div>

                        <input id="mobile" type="number" name="mobile" onChange={onChange} value={values.mobile} placeholder="mobile number" />
                        <div className="agetempContainer">
                            <select name="age" id="age" placeholder="age" onChange={onChange} value={values.age}>
                                <option className="ageOption" disabled={true} value="">age</option>
                                <option value="16-">Under 16</option>
                                <option value="16-25">16 to 25</option>
                                <option value="40-60">40 to 60</option>
                                <option value="60+">Over 60</option>
                            </select>
                            <select name="temp" id="temp" placeholder="temp" onChange={onChange} value={values.temp}>
                                <option className="tempOption" disabled={true} value="">Temperature</option>
                                <option value="38-">Below 38°C</option>
                                <option value="38+">38°C and above</option>
                            </select>
                        </div>

                        <select id="travel" name="travel" id="travel" placeholder="travel" onChange={onChange} value={values.travel}>
                            <option className="travelOption" disabled={true} value="">Did you travel (local/international) in the past 14 days?</option>
                            <option value="yes">Yes, I have travelled in the past 14 days.</option>
                            <option value="no">No, I have not travelled in the past 14 days.</option>
                        </select>

                        <div className="seContainer" id="seContainer">
                            <input style={{opacity:'0', margin: '-20px'}} id="symptoms" type="text" name="symptoms" onChange={onChange} value={values.symptoms} placeholder="symptoms" />
                            <p>{"Exposure & Symptoms"}</p>

                            <div className="seOption">
                                <p>Have you provided care for a COVID-19 patient?</p>
                                <div className="checkContainer">
                                    <input className="symptomsCheck" data-name="Cared for COVID-19 patient" onClick={(e) => addSymptoms(e)} type="checkbox" id="careCheck" name="care" value="care" />
                                </div>
                            </div>
                            <div className="seOption">
                                <p>Have you worked/stayed in a COVID-19 environment?</p>
                                <div className="checkContainer">
                                    <input className="symptomsCheck" data-name="Work/Stayed with a COVID-19 patient" onClick={(e) => addSymptoms(e)} type="checkbox" id="workCheck" name="work" value="work" />
                                </div>
                            </div>
                            <div className="seOption">
                                <p>Have you travelled with a COVID-19 patient?</p>
                                <div className="checkContainer">
                                    <input className="symptomsCheck" data-name="Travelled with a COVID-19 patient" onClick={(e) => addSymptoms(e)} type="checkbox" id="travelledCheck" name="travelled" value="travelled" />
                                </div>
                            </div>
                            <div className="seOption">
                                <p>Do you have any Respiratory illnesses? (eg. cough/cold)</p>
                                <div className="checkContainer">
                                    <input className="symptomsCheck" data-name="Has a Respiratory illness" onClick={(e) => addSymptoms(e)} type="checkbox" id="respiratoryCheck" name="respiratory" value="respiratory" />
                                </div>
                            </div>
                        </div>
                        <button id="submitSurvey" type="submit">Submit Survey</button>
                    </form>
                    {/* <div className="mapContainer" id="map"></div> */}
                    <div className="mapContainer" id="map" onLoad={() => useEffect}>Loading Map...</div>
                    {/* <MapComp /> */}
                </div>
            )
        }
        return (
            null
        )
    }
    
    return(
        <>
            {renderForm()}
        </>
    )
}

const CREATE_SCREEN_MUTATION = gql`
    mutation createScreen(
        $age: String!
        $address: String!
        $mobile: String!
        $temp: String!
        $travel: String!
        $symptoms: String!
    ){
        createScreen(
            age: $age
            address: $address
            mobile: $mobile
            temp: $temp
            travel: $travel
            symptoms: $symptoms
        )
        {
            id createdAt age firstName lastName address mobile temp travel symptoms
        }
    }
`

export default ScreeningForm;
