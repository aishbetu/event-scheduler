import React from "react";
import {Container, Row, Table} from "react-bootstrap";
import EventModal from "./EventModalButton";


class EventList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            eventtype: '',
            time: '',
        }
    }

    componentDidMount() {
        const eventData = JSON.parse(localStorage.getItem('Data'));
        this.setState({
            title: eventData.title,
            eventtype: eventData.eventtype,
            time: eventData.time
        })
    }

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
                        <td>{this.state.title}</td>
                        <td>{this.state.eventtype}</td>
                        <td>{this.state.time}</td>
                        <td>Monday, 31/08/2020</td>
                    </tr>
                    </tbody>
                </Table>

                <Container className="row"/>
                <Row className="justify-content-center">
                    <EventModal />
                </Row>
            </Container>
        );
    }
}
export default EventList;