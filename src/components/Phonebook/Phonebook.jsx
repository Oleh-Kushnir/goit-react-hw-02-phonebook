import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
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
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button type="submit">Add Contact</button>
        </form>
      </div>
    );
  }
}
