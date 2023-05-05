import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, delContact }) => {
  // const handleDelete = id => {
  //   delContact(id);
  // };

  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            {contact.name}: {contact.number}
            {/* <button onClick={() => handleDelete(contact.id)}>Delete</button> */}
             <button onClick={() =>  delContact(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  delContact: PropTypes.func.isRequired,
};

export default ContactList;
