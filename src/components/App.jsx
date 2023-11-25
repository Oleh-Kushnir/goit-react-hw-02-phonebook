import React, { Component } from 'react';

import ContactForm from '../components/ContactForm/ContactForm.jsx';
// import { PhonebookList } from '../components/PhonebookList/PhonebookList.jsx';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleItem = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <div>
          <h1>Contacts</h1>
          <label htmlFor="number">Filter contacts by name</label>
          <input
            type="text"
            placeholder="Filter contacts by name"
            value={filter}
            onChange={this.handleFilterChange}
          />
          <ul>
            {visibleItem.map(el => {
              return (
                <li key={el.id}>
                  {el.name}:{el.number}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
