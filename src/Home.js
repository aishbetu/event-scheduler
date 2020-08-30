import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

import NavBar from "./components/navBar";
import EventList from "./components/eventList";

const Home = ()  => {
  return (
    <Container fluid >
        <NavBar />

        <EventList/>
    </Container>
  );
};

export default Home;