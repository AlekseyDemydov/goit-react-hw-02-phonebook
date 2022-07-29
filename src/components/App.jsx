import { Component } from 'react';
import Form from './comp/form';
import FormList from './comp/formList';
import Filter from './comp/filter';
import styles from './css/input.module.css';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleSubmit = obj => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...obj }],
    }));
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleDeleteContacts = id => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== id) });
  };
  render() {
    return (
      <div className={styles.box}>
        <div>
          <h1>Phonebook</h1>
          <Form
            contacts={this.state.contacts}
            handleSubmit={this.handleSubmit}
          />
          <h2>find contacts by name</h2>
          <Filter handleChange={this.handleChange} />
        </div>
        <div>
          <h2>Contacts</h2>
          <FormList
            filter={this.state.filter}
            contacts={this.state.contacts}
            handleDeleteContacts={this.handleDeleteContacts}
          />
        </div>
      </div>
    );
  }
}
