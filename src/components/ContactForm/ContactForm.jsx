import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeName = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...this.state, id: nanoid() }],
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={this.changeName}
            value={this.state.name}
          />

          <label htmlFor="number">Name</label>
          <input
            type="tel"
            name="number"
            required
            onChange={this.changeName}
            value={this.state.number}
          />

          <button type="submit">Add Contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
