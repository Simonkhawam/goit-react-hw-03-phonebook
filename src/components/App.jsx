import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import SearchBar from './SearchBar';
import './App.css';
class App extends Component {
  state = {
    contacts: [],
    searchFile: '',
  };
  addContact = newContact => {
    const isExistingContact = this.state.contacts.some(
      contact => contact.name === newContact.name
    );
    if (isExistingContact) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      const contactWithId = { ...newContact, id: nanoid() };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contactWithId],
      }));
    }
  };
  deleteContact = Id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== Id),
    }));
  };

  handleSearchChange = event => {
    this.setState({ searchFile: event.target.value });
  };

  render() {
    const { contacts, searchFile } = this.state;
    const filteredContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchFile.toLowerCase())
    );
    return (
      <div className="form">
        <ContactForm addContact={this.addContact} className="test" />
        <SearchBar onSearchChange={this.handleSearchChange} />
        <ContactList
          contacts={filteredContact}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
