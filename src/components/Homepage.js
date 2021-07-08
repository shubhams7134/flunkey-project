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
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   WARNING
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>This is restaurant is closed</h4>
                <p>
                    Due to COVID-19 pandemic and lockdown the original website is 
                    closed due to losses and uncertainity, hence the website is hosted 
                    on public platform for interested clients to get their own websites
                     for going online with their own ventures. 
                     The source code is also made public for interested developers.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button href="https://www.npmjs.com/package/react-bootstrap-modal">Source Code</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Homepage = () => {
    firebaseDb.child('metrics');
    const [modalShow, setModalShow] = React.useState(true);
    return (
        <>

            <Navingbar />
            <>
                <Button variant="" onClick={() => setModalShow(true)}>
                    
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
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
                <div style={{ width: '100%', justifyContent: 'center', backgroundColor: '#252525', marginLeft: 'auto', marginRight: 'auto' }}><Footer /></div>
            </div>
        </>
    );
};

export default Homepage;