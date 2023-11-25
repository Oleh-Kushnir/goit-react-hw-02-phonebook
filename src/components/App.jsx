import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import { Phonebook } from '../components/Phonebook/Phonebook.jsx';
// import { PhonebookList } from '../components/PhonebookList/PhonebookList.jsx';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  changeName = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  changeNumber = e => {
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
        <h1>Phonebook</h1>
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
            onChange={this.changeNumber}
            value={this.state.number}
          />
          <button type="submit">Add Contact</button>
        </form>

        <div>
          <h1>Contacts</h1>
          <div>
            {this.state.contacts.map(el => {
              return (
                <div key={el.id}>
                  {el.name}:{el.number}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
