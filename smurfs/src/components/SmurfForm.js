import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
    state = {
      name: '',
      height: '',
      age: ''
    };
    
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    createSmurf = () => {
        const { name, age, height } = this.state;
        const smurf = { name, age, height };
        this.props.addSmurf(smurf);
        this.setState({
          name: '',
          age: '',
          height: ''
        });
    };

    render() {
      return (
        <div className='SmurfForm'>
            <input
              type='text'
              placeholder="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <input
              type='text'
              placeholder="height"
              name="height"
              value={this.state.height}
              onChange={this.handleInputChange}
            />
            <input
              type='text'
              placeholder="age"
              name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
            />
            <button onClick={this.createSmurf}>Create Smurf</button>
        </div>
      );
    }
}

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf
    }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
