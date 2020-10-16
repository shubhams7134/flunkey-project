import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "./Rating";
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div class="boundary">
            <h2 class="main-text">Reviews</h2>
            <div class="social-box">
              <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right" >
                    <span class="border-right">
                      <Card style={{ width: '18rem', height: '12rem' }} >
                        <p>Good place to spend time with loved once!!! </p>
                        <Card.Body>
                          <Card.Title>Naman Kumar </Card.Title>
                          <Rating value="4" />
                        </Card.Body>
                      </Card>
                    </span>
                  </div>
                  <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right">
                    <span class="border-right">
                      <Card style={{ width: '18rem', height: '12rem' }} >
                        <p>Loved the  Butter Chicken and the Garlic Naan </p>
                        <Card.Body>
                          <Card.Title>Ajay Kumar Sharma</Card.Title>
                          <Rating value="5" />
                        </Card.Body>
                      </Card>
                    </span>
                  </div>
                  <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right">
                    <span class="border-right">
                      <Card style={{ width: '18rem', height: '12rem' }} >
                        <p>Everyone should try their lovely shakes onces</p>
                        <Card.Body>
                          <Card.Title>Gajendra Yadav</Card.Title>
                          <Rating value="4" />
                        </Card.Body>
                      </Card>
                    </span>
                  </div>
                  <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right">
                    <span class="border-right">
                      <Card style={{ width: '18rem', height: '12rem' }} >
                        <p>Tried Butter Chicken </p>
                        <Card.Body>
                          <Card.Title>Ajay Kumar Sharma</Card.Title>
                          <Rating value="3" />
                        </Card.Body>
                      </Card>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="boundary">
            <h2 class="main-text">Reviews</h2>
            <div class="social-box">
              <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right" >
                    <span class="border-right">
                      <Card style={{ width: '18rem', height: '12rem' }} >
                        <p>Good place to spend time with loved once!!! </p>
                        <Card.Body>
                          <Card.Title>Naman Kumar </Card.Title>
                          <Rating value="4" />
                        </Card.Body>
                      </Card>
                    </span>
                  </div>
                  <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right">
                    <span class="border-right">
                      <Card style={{ width: '18rem', height: '12rem' }} >
                        <p>Loved the  Butter Chicken </p>
                        <Card.Body>
                          <Card.Title>Ajay Kumar Sharma</Card.Title>
                          <Rating value="5" />
                        </Card.Body>
                      </Card>
                    </span>
                  </div>
                  <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right">
                    <span class="border-right">
                      <Card style={{ width: '18rem', height: '12rem' }} >
                        <p>Everyone should try their lovely shakes onces</p>
                        <Card.Body>
                          <Card.Title>Gajendra Yadav</Card.Title>
                          <Rating value="4" />
                        </Card.Body>
                      </Card>
                    </span>
                  </div>
                  <div class="col-lg-3 col-xs-3 col-sm-12 text-center card-height border-right">
                    <span class="border-right">
                      <Card style={{ width: '18rem', height: '12rem' }} >
                        <p>Tried Butter Chicken </p>
                        <Card.Body>
                          <Card.Title>Ajay Kumar Sharma</Card.Title>
                          <Rating value="3" />
                        </Card.Body>
                      </Card>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
