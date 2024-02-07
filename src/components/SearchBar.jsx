import react from 'react';
export default class SearchBar extends react.Component {
  render() {
    return (
      <div className="contact-title">
        <h2 className="contact-title">Contacts</h2>
        <input
          type="text"
          placeholder="Search Contact"
          onChange={this.props.onSearchChange}
        />
      </div>
    );
  }
}
