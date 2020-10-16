import React from 'react';
import firebaseDb from "../firebase";
import Navingbar from "./Navbar";
import { Navbar } from 'react-bootstrap';
import { Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import SimpleSlider from "./News";
import Statistics from "./Statistics";
import CarouselHotel from "./Carousel";
import Speciality from "./Speciality";
import DateAndTimePickers from "./Booking";
import Footer from "./Footer";


const Homepage = () => {
    firebaseDb.child('metrics')
    return (
        <>
            <Navingbar />
            <Navbar bg="white" sticky="top" expand="sm" variant="light" style={{ marign: 0 }}>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav class="topnav" >
                        <Nav.Link href="#Slideshow"
                        ><h2 class="custom-navbar-main-text"> About Us</h2></Nav.Link>
                    </Nav>
                    <h2 class="custom-navbar-main-text">|</h2>
                    <Nav class="topnav">
                        <Nav.Link href="#Speciality123
                            "><h2 class="custom-navbar-main-text"> Our Speciality </h2></Nav.Link>
                    </Nav>
                    <h2 class="custom-navbar-main-text">|</h2>
                    <Nav class="topnav">
                        <Nav.Link href="#Stats
                            "><h2 class="custom-navbar-main-text"> Statistics </h2></Nav.Link>
                    </Nav>
                    <h2 class="custom-navbar-main-text">|</h2>
                    <Nav class="topnav">
                        <Nav.Link href="#SimpleSlider
                            "><h2 class="custom-navbar-main-text"> Reviews</h2></Nav.Link>
                    </Nav>
                    <h2 class="custom-navbar-main-text">|</h2>
                    <Nav class="topnav">
                        <Nav.Link href="#Booking
                            "><h2 class="custom-navbar-main-text"> Book a Table</h2></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="Slideshow">
                <CarouselHotel />
            </div>
            <div id="Booking">
                <DateAndTimePickers />
            </div>
            <div id="Speciality123">
                <div >
                    <Speciality />
                </div>
            </div>
            <div id="Stats">
                <Statistics />
            </div>
            <div id="SimpleSlider">
                <SimpleSlider />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Homepage;