import react from 'react';

export default class ContactForm extends react.Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      if (/^[a-zA-Z' -]*$/.test(value)) {
        this.setState({ [name]: value });
      }
    } else if (name === 'number') {
      if (!value || /^\d+$/.test(value)) {
        this.setState({ [name]: value });
      }
    }
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="name-title">
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="Enter name"
          />
        </label>
        <label className="number-title">
          Number
          <input
            type="tel"
            value={this.state.number}
            onChange={this.handleInputChange}
            name="number"
            placeholder="Enter number"
          />
        </label>
        <button className="submit-btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
