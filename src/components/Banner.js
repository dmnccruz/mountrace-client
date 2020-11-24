import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Banner(){
    return(
        <Row className="psmall banner-container">
            <Col className="branding">
                <div className="title-brand">
                    <h1 className="headline-text capitalize">shield.</h1>
                    <h1 className="headline-text capitalize">screen.</h1>
                    <h1 className="headline-text"><span className="capitalize">slow</span> the spread.</h1>
                    <Button as={Link} to="/screening" className="accent-color title uppercase the-button">
                    start screening
                    </Button>
                </div>
            </Col>
        </Row>
    );
}