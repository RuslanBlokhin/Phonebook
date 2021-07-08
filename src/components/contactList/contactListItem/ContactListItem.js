import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './ContactsListItem.module.css';
import contactOperations from '../../../redux/phoneBook/phoneBook-operations';
import contactsSelectors from '../../../redux/phoneBook/phoneBook-selectors';

const ContactListItem = ({ onDeleteContact, contacts }) => (
  <>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className={style.contactItem}>
          {name}: {number}
          <button
            className={style.buttonDel}
            type="submit"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      );
    })}
  </>
);

ContactListItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

// const findContact = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   if (filter) {
//     return allContacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   }
//   return allContacts;
// };

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContact(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
