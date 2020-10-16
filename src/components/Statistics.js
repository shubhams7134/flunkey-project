import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "./Rating";
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default function Statistics() {
    return (
        <div >
            <div>
                <div class="boundary">
                    <h2 class="main-text">Statistics and Achievements</h2>
                    <div class="social-box">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right h-100" >
                                    <Card style={{ width: '18rem', height: '8rem' }} >
                                        <Card.Body>
                                            <Card.Title>8pm-10pm</Card.Title>
                                            <Card.Text>
                                                Peak Hours
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right h-100" >
                                    <Card style={{ width: '18rem', height: '8rem' }} >
                                        <Card.Body>
                                            <Card.Title>12%</Card.Title>
                                            <Card.Text>
                                                Growth in orders (monthly)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right h-100" >
                                    <Card style={{ width: '18rem', height: '8rem' }} >
                                        <Card.Body>
                                            <Card.Title>18%</Card.Title>
                                            <Card.Text>
                                                Growth in orders (weekly)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right h-100" >
                                    <Card style={{ width: '18rem', height: '8rem' }} >
                                        <Card.Body>
                                            <Card.Title>15 minutes</Card.Title>
                                            <Card.Text>
                                                Average waiting time since the order is confirmed
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right h-100" >
                                    <Card style={{ width: '18rem', height: '8rem' }} >
                                        <Card.Body>
                                            <Card.Title>Punjabi Thali</Card.Title>
                                            <Card.Text>
                                                Most popular food
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right h-100" >
                                    <Card style={{ width: '18rem', height: '8rem' }} >
                                        <Card.Body>
                                            <Card.Title>10</Card.Title>
                                            <Card.Text>
                                                Average number of orders per hour
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right h-100" >
                                    <Card style={{ width: '18rem', height: '8rem' }} >
                                        <Card.Body>
                                            <Card.Title>10</Card.Title>
                                            <Card.Text>
                                                Average number of orders per hour
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right h-100" >
                                    <Card style={{ width: '18rem', height: '8rem' }} >
                                        <Card.Body>
                                            <Card.Title>25 people</Card.Title>
                                            <Card.Text>
                                                Seating capacity due to COVID-19
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right h-100" >
                                    <Card style={{ width: '18rem', height: '8rem' }} >
                                        <Card.Body>
                                            <Card.Title><Rating value="4" /></Card.Title>
                                            <Card.Text>
                                                Rating given by TIMES GROUP in 2019-20
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right h-100" >
                                    <Card style={{ width: '18rem', height: '8rem' }} >
                                        <Card.Body>
                                            <Card.Title><Rating value="3" /></Card.Title>
                                            <Card.Text>
                                                Average rating on ZOMATO
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right h-100" >
                                    <Card style={{ width: '18rem', height: '8rem' }} >
                                        <Card.Body>
                                            <Card.Title><Rating value="4" /></Card.Title>
                                            <Card.Text>
                                                Average rating on GOOGLE
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right h-100" >
                                    <Card style={{ width: '18rem', height: '8rem' }} >
                                        <Card.Body>
                                            <Card.Title><Rating value="4" /></Card.Title>
                                            <Card.Text>
                                                Average rating on SWIGGY
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

