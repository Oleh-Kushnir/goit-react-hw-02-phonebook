import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    const newName = event.target.value;
    this.setState(prevState => ({
      name: newName,
      contacts: [...prevState.contacts, newName],
    }));
  };

  submitChange = event => {};

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <ul>
          {this.state.contacts.map((contact, index) => (
            <li key={index}>{contact}</li>
          ))}
        </ul>
        <button type="submit" onSubmit={this.submitChange}></button>
      </div>
    );
  }
}
