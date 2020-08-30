import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import CustomDatePicker from "./CustomDatePicker";

const timeSlots = [

    {
        id: 1,
        value: '11:30AM'
    },
    {
        id: 2,
        value: '12:00PM'
    },
    {
        id: 3,
        value: '12:30PM'
    },
    {
        id: 4,
        value: '01:00PM'
    },
    {
        id: 5,
        value: '01:30PM'
    },
    {
        id: 6,
        value: '02:00PM'
    },
    {
        id: 7,
        value: '02:30PM'
    },
    {
        id: 8,
        value: '03:00PM'
    },
];

const eventTypes = [
    {
        id: 1,
        value: 'Webinar',
    },
    {
        id: 2,
        value: 'Workshop',
    },
    {
        id: 3,
        value: 'Confernece',
    },
];

// for time slots
function Options({ options }) {
        return (
          options.map(option =>
              <option key={option.id} value={option.value}>
                  {option.value}
              </option>)
        );
}

// for event types
function Option({ options }) {
    return (
        options.map(option =>
            <option key={option.id} value={option.value}>
                {option.value}
            </option>)
    );
}


class EventForm extends React.Component{

    constructor() {
        super();
        this.state = {
            title: '',
            eventtype: null,
            time: null,
        }
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    };

    handleTypeChange = (event) => {
        this.setState({
            eventtype: event.target.value
        })
    };

    handleTimeChange = (event) => {
        this.setState({
            time: event.target.value
        })
    };

    handleSubmit = () => {
      alert(`${this.state.title} ${this.state.eventtype}, ${this.state.time}`)
    };

    render() {
        return (
            <Container fluid>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control    placeholder="Event Title"
                                         name="title"
                                         value={this.state.title}
                                         onChange={this.handleTitleChange}/>
                    </Form.Group>

                    <Form.Group controlId="EventType">
                        <Form.Label>Event Type</Form.Label>
                        <Form.Control as="select"
                                      name="eventtype"
                                      value={this.state.eventtype}
                                      onChange={this.handleTypeChange}>
                            <Option options={eventTypes} />
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Slots">
                        <Form.Label>Time Slots</Form.Label>
                        <Form.Control as="select"
                                      name="time"
                                      value={this.state.time}
                                      onChange={this.handleTimeChange}>
                            <Options options={timeSlots} />
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="datepicker">
                        <Form.Label>Date</Form.Label>
                        <br/>
                        <CustomDatePicker/>
                    </Form.Group>
                        <Button
                            variant="primary"
                            type="submit">
                            Submit
                        </Button>
                </Form>

            </Container>
        );
    }
}

export default EventForm;