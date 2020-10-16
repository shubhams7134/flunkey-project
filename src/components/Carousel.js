import React from 'react';
import firebaseDb from "../firebase";
import Navbar from "./Navbar";
import { Button, Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import SimpleSlider from "./News";

const CarouselHotel = () => {
    return (
        <div class="card mb-3 align-self-center hotel" >
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://fullhdpictures.com/wp-content/uploads/2016/11/Restaurant-HD-Wallpapers.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://www.wallpapers4u.org/wp-content/uploads/restaurant_cafe_appliances_tables_chairs_interior_design_39216_1920x1080.jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://wallpapermemory.com/uploads/211/still-life-food-wallpaper-full-hd-1920x1080-436487.jpg" alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://wallpapercave.com/wp/wp1939199.jpg" alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="card-body">
                <h5 class="card-title card-heading">SURYA PALACE</h5>
                <p class="card-text">₹ 1110/- for two ||<small class="text-muted"> Chinese,Mughlai,Continental,Punjabi</small><p class="card-text"><small class="text-muted">Manek Chowk, Ahmedabad</small></p><small class="text-muted">Time: 6pm-12pm</small></p>
                <button type="button" class="btn btn-danger btn-lg">Get Direction</button>
            </div>
        </div>
    )
}
    
export default CarouselHotel;