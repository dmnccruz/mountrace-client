import React from 'react';
import Banner from '../components/Banner';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Footer from '../components/Footer';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import '../styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from '../components/AppNavBar'

export default function Home() {
    return(
        <Container fluid>
            <AppNavBar/>
            <Container fluid>
                <Banner/>
                <Section1/>
                <Section2/>
                <Section3/> 
            </Container>
            <Footer/>
        </Container>
    );
}