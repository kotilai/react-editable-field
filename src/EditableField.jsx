import React from "react";
import PropTypes from 'prop-types';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, InputGroup} from 'react-bootstrap';

class EditableField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            property: props.property,
            value: props.value,
            editMode: false,
            editvalue: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.editModeOn = this.editModeOn.bind(this);
        this.editModeOff = this.editModeOff.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            property: nextProps.property,
            value: nextProps.value
        });
    }

    handleChange(event) {
        this.setState({
            editvalue: event.target.value
        });
    }

    handleSave() {
        this.setState({
            value: this.state.editvalue
        });

        !!this.props.changed && this.props.changed(this.state.property, this.state.editvalue);
        this.editModeOff();
    }

    editModeOn() {
        this.setState({
            editMode: true,
            editvalue: this.state.value
        });
    }

    editModeOff() {
        this.setState({
            editMode: false
        });
    }

    getViewMode() {
        return (
            <InputGroup>
                <FormControl.Static style={{cursor:'pointer'}}
                        onClick={this.editModeOn}>
                    {this.state.value}
                </FormControl.Static>
            </InputGroup>);
    }

    getEditMode() {
        return (
            <InputGroup>
                <FormControl type="text" value={this.state.editvalue}
                        onChange={this.handleChange} />
                <InputGroup.Button>
                    <Button onClick={this.handleSave}>Save</Button>
                    <Button onClick={this.editModeOff}>Cancel</Button>
                </InputGroup.Button>
            </InputGroup>);
    }

    render() {
        return this.state.editMode ? this.getEditMode() : this.getViewMode();
    }
}

EditableField.propTypes = {
    property: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    changed: PropTypes.func
};

export default EditableField;
