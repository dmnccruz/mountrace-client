import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Virus from '../icons/virus.png';
import Cough from '../icons/cough.png';
import Mask from '../icons/mask.png';

export default function Section1(){
    return(
        <Row xs={1} md={3} lg={3}  className="psmall section1-container">
                <Col className="section-content">
                    <div>
                        <img alt="" src={ Virus } className="section1-icon section1-icon-virus"/>
                    </div>
                    <div className="title-center">
                        <h2 className="title">coronavirus 2019</h2>
                        <p className="subtitle">brief overview</p>
                    </div>
                    <div className="description-area psmall da-s1-1">
                        <p className="">Coronavirus 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome Coronavirus 2 (SARS-CoV-2) that was first identified in Wuhan in 2019 and has since spread globally.</p>
                        <p className="">The World Health Organization (WHO) declared an outbreak of this disease as a pandemic on 11 March 2020.</p>
                    </div>
                </Col>
                <Col className="section-content">
                    <div className="section-icon">
                        <img alt="" src={ Cough } className="section1-icon section1-icon-cough"/>
                    </div>
                    <div className="title-center">
                        <h2 className="title">symptoms</h2>
                        <p className="subtitle">common signs of infection</p>
                    </div>
                    <div className="psmall list">
                        <ul className="custom-list-1 description-area da-s1-2">
                            <li>fever</li>
                            <li>cough</li>
                            <li>shortness of breath</li>
                            <li>sore throat</li>
                            <li>muscle pain</li>
                        </ul>
                    </div>
                </Col>
                <Col className="section-content">
                    <div>
                        <img alt="" src={ Mask } className="section1-icon section1-icon-mask"/>
                    </div>
                    <div className="title-center">
                        <h2 className="title">prevention</h2>
                        <p className="subtitle">when visiting affected areas</p>
                    </div>
                    <div className="psmall">
                        <ul className="custom-list-2 description-area da-s1-3">
                            <li className="procedure-list">wash hands with soap and water</li>
                            <li className="procedure-list">avoid contact with sick people</li>
                            <li className="procedure-list">avoid touching eyes, nose and mouth</li>
                            <li className="procedure-list">disinfect frequently touched objects and surfaces</li>
                            <li className="procedure-list">cover cough or sneeze with tissue</li>
                        </ul>
                    </div>
                </Col>
            </Row>
    );
}