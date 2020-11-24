import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ActiveCases from '../img/map/active_cases.png';
import Facilities from '../img/map/facilities.png';
import Samples from '../img/map/samples.png';
import TestingLabs from '../img/map/testing_labs.png';
import TotalCases from '../img/map/total_cases.png';
import Call from '../icons/call.png';
import Calendar from '../icons/calendar.png';
import Temp from '../icons/temp.png';
import Nurse from '../icons/nurse.png';

export default function Section2() {
    return(
            <Row xs={1} md={1} lg={2} className="psmall section2-container">
                <Col className="map">
                    <div className="image-container">
                        <img src={ ActiveCases } className="active-cases"/>
                        <img src={ Facilities } className="facilities"/>
                        <img src={ Samples } className="samples"/>
                        <img src={ TestingLabs } className="testing-labs"/>
                    </div>

                </Col>
                <Col className="procedure">
                    <h2 className="title">procedure</h2>
                    <p className="subtitle">what to expect during contact tracing</p>
                    <div className="description-area description-procedure-area">
                        <p className="psmall procedure-list"><img src={ Call } className="procedure-icon" />public health worker will call and check your condition</p>
                        <p className="psmall procedure-list"><img src={ Calendar } className="procedure-icon" />self-isolate for 14 days</p>
                        <p className="psmall procedure-list"><img src={ Temp } className="procedure-icon temp" /><img src={ Temp } className="procedure-icon temp temp-r" />take your temperature twice a day</p>
                        <p className="psmall procedure-list"><img src={ Nurse } className="procedure-icon" />notify the health department for any symptoms that will occur</p>
                    </div>
                    
                </Col>
            </Row>
    );
}