import React from "react";
import {Container, Row, Table} from "react-bootstrap";
import EventModal from "./EventModalButton";

class EventList extends React.Component{
    render() {
        return (
            <Container fluid="md">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Time</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Python workshop</td>
                        <td>WorkShop</td>
                        <td>12:00PM</td>
                        <td>Saturday, 29/08/2020</td>
                    </tr>
                    <tr>
                        <td>Pandemic Situation</td>
                        <td>Webinar</td>
                        <td>02:00PM</td>
                        <td>Saturday, 29/08/2020</td>
                    </tr>
                    </tbody>
                </Table>

                <Container className="row"/>
                <Row className="justify-content-center">
                    // Open Modal Form to Add new Data
                    <EventModal />
                </Row>
            </Container>
        );
    }
}
export default EventList;