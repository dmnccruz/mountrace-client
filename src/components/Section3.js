import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card1 from '../img/isolayer/card-1.jpg';
import Card2 from '../img/isolayer/card-2.jpg';
import Card3 from '../img/isolayer/card-3.jpg';
import Card4 from '../img/isolayer/card-4.jpg';
import Card5 from '../img/isolayer/card-5.jpg';
import Card6 from '../img/isolayer/card-6.jpg';
import Card7 from '../img/isolayer/card-7.jpg';
import Card8 from '../img/isolayer/card-8.jpg';
import Card9 from '../img/isolayer/card-9.jpg';

export default function Section3() {
    return(
        <>
        <Row className="psmall section3-container">
                <Col className="section3-content">
                    <h2 className="title">our mission</h2>
                    <p className="subtitle">help slow the spread</p>
                    <p className="psmall description-area mission-description">Mountrace is a screening app tool created for the purpose of helping frontliners during this time of pandemic.</p>
                </Col>
            </Row>

            <div className="row-3d">
                    <div className="column-3d">
                        <div className="item-card">
                            <a className="item-card-dest cover" href="/asd">.</a>
                            <figure className="item-card-thumb">
                                <img src={Card1} alt=""/>
                                <span className="shadow cover"></span>
                            </figure>
                        </div>
                    </div>
                    <div className="column-3d">
                        <div className="item-card">
                            <a className="item-card-dest cover" href="/asd">.</a>
                            <figure className="item-card-thumb">
                                <img src={Card2} alt=""/>
                                <span className="shadow cover"></span>
                            </figure>
                        </div>
                    </div>
                    <div className="column-3d">
                        <div className="item-card">
                            <a className="item-card-dest cover" href="/asd">.</a>
                            <figure className="item-card-thumb">
                                <img src={Card3} alt=""/>
                                <span className="shadow cover"></span>
                            </figure>
                        </div>
                    </div>
                    <div className="column-3d">
                        <div className="item-card">
                            <a className="item-card-dest cover" href="/asd">.</a>
                            <figure className="item-card-thumb">
                                <img src={Card4} alt=""/>
                                <span className="shadow cover"></span>
                            </figure>
                        </div>
                    </div>
                    <div className="column-3d">
                        <div className="item-card">
                            <a className="item-card-dest cover" href="/asd">.</a>
                            <figure className="item-card-thumb">
                                <img src={Card5} alt=""/>
                                <span className="shadow cover"></span>
                            </figure>
                        </div>
                    </div>
                    <div className="column-3d">
                        <div className="item-card">
                            <a className="item-card-dest cover" href="/asd">.</a>
                            <figure className="item-card-thumb">
                                <img src={Card6} alt=""/>
                                <span className="shadow cover"></span>
                            </figure>
                        </div>
                    </div>
                    <div className="column-3d">
                        <div className="item-card">
                            <a className="item-card-dest cover" href="/asd">.</a>
                            <figure className="item-card-thumb">
                                <img src={Card7} className="card-7" alt=""/>
                                <span className="shadow cover"></span>
                            </figure>
                        </div>
                    </div>
                    <div className="column-3d">
                        <div className="item-card">
                            <a className="item-card-dest cover" href="/asd">.</a>
                            <figure className="item-card-thumb">
                                <img src={Card8} alt=""/>
                                <span className="shadow cover"></span>
                            </figure>
                        </div>
                    </div>
                    <div className="column-3d">
                        <div className="item-card">
                            <a className="item-card-dest cover" href="/asd">.</a>
                            <figure className="item-card-thumb">
                                <img src={Card9} alt=""/>
                                <span className="shadow cover"></span>
                            </figure>
                        </div>
                    </div>
                </div>
        </>
    );
}