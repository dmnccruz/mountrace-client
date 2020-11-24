import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Logo from '../img/logo_2.png';

export default function Footer(){
    return(
        <Container fluid>
            <Row xs={1} md={3} lg={3} className="psmall footer footer-hr">
            <Col className="footer-logo-container">
                <figure className="logo-wrap">
                    <img alt="" src={Logo} className="footer-logo"/>
                </figure>
            </Col>
            <Col className="site-map">
                <ul>
                    <li className="site-map-link"><a href="/">home</a></li>
                    <li className="site-map-link"><a href="/symptoms">symptoms</a></li>
                    <li className="site-map-link"><a href="procedure">procedure</a></li>
                    <li className="site-map-link"><a href="/about">about</a></li>
                </ul>
            </Col>
            
                <Col className="disclaimer">
                    <p className="footer-title">disclaimer:</p>
                    <div className="footer-description">
                        <p>This website is for educational purposes only and not intended for commercial use.</p>
                        <p>Images from <a href="https://unsplash.com/" className="footer-link">Unsplash.</a></p>
                        <p>Icons from <a href="https://fontawesome.com/" className="footer-link">FontAwesome.</a></p>
                        <p className="copy">&#169; 2020 | Zuitt Coding Bootcamp - b88nc ReactJS</p>
                    </div>
                </Col>
            </Row>
        </Container>
        
            

        
    )
}