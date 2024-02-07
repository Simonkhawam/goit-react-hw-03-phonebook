import react from 'react';
export default class ContactList extends react.Component {
  render() {
    return (
      <ul className="delete.button">
        {this.props.contacts.map(contact => (
          <li className="delete.button" key={contact.id}>
            {contact.name}-{contact.number}{' '}
            <button
              className="delete.button"
              onClick={() => this.props.deleteContact(contact.id)}
            >
              Delete
            </button>{' '}
          </li>
        ))}
      </ul>
    );
  }
}
