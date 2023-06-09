import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { onChange } = this.props;

    return (
      <div>
        <h4>Find contacts by name</h4>
        <input
          onChange={onChange}
          type="text"
          placeholder="Enter name"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
    );
  }
}
