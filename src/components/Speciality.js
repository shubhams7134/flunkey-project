import React from 'react';
import firebaseDb from "../firebase";
import Navbar from "./Navbar";
import { Button, Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import SimpleSlider from "./News";

const Speciality = () => {  
    return (
        <div class="boundary" id="testing123">
            <p class="main-text" >TOP DISHES</p>
            <div class="social-box">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right">
                            <span class="border-right">
                                <Card style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src="https://i2.wp.com/www.healthymidwesterngirl.com/wp-content/uploads/2019/12/Instant-Pot-Chana-Masala-1200px-7-500x500.jpg" />
                                    <Card.Body>
                                        <Card.Title>Pindi Chhole Masala</Card.Title>
                                        <Button variant="primary">Order Now</Button>
                                    </Card.Body>
                                </Card>
                            </span>
                        </div>
                        <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Butter-chicken-500x500.jpg" />
                                <Card.Body>
                                    <Card.Title>Butter Chicken</Card.Title>
                                    <Button variant="primary">Order Now</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1-500x500.jpg" />
                                <Card.Body>
                                    <Card.Title>Double Cheese Veggie </Card.Title>
                                    <Button variant="primary">Order Now</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://www.shakedrinkrepeat.com/wp-content/uploads/2018/06/margarita_milkshakes_recipe-3-500x500.jpg" />
                                <Card.Body>
                                    <Card.Title>Vanilla Shake</Card.Title>
                                    <Button variant="primary">Order Now</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                {/* <div class="col-lg-3 col-xs-3 col-sm-12 text-center" id="testing123">
                <div class="box">
                    <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
                    <div class="box-title">
                        <h1 className="text-heading">Chana Masala</h1>
                    </div>
                    <div class="box-text">
                        <h2>Most ordered dish</h2>
                    </div>

                </div>
            </div> */}
            </div>

        </div>
    )
}

export default Speciality;