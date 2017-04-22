import React from 'react';
import ReactDOM from 'react-dom';
import {EditableField} from '../src/index.js';
import {Col, ControlLabel, Form, FormGroup, Grid, Row, PageHeader, Panel} from 'react-bootstrap';

class Demo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            customer: {
                firstName: "John",
                lastName: "Smitherson",
                email: "john.m.smitherson@something.com",
                phone: "555-789 4567"
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(property, value) {
        var customer = this.state.customer;
        customer[property] = value;
        this.setState({
            customer: customer
        });

        console.log("Field " + property + " saved with value: " + value);
        console.log(this.state.customer);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <PageHeader>Customer information</PageHeader>
                        <Panel>
                            <Form horizontal>
                                <FormGroup>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        First name
                                    </Col>
                                    <Col sm={10}>
                                        <EditableField property="firstName" value={this.state.customer.firstName} changed={this.handleChange} />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Last name
                                    </Col>
                                    <Col sm={10}>
                                        <EditableField property="lastName" value={this.state.customer.lastName} changed={this.handleChange} />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Email name
                                    </Col>
                                    <Col sm={10}>
                                        <EditableField property="email" value={this.state.customer.email} changed={this.handleChange} />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Phone
                                    </Col>
                                    <Col sm={10}>
                                        <EditableField property="phone" value={this.state.customer.phone} changed={this.handleChange} />
                                    </Col>
                                </FormGroup>
                             </Form>
                        </Panel>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Grid>
        );
    };
}

ReactDOM.render(<Demo />, document.getElementById('app'));
