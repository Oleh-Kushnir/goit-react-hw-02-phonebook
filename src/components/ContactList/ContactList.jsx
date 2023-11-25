import PropTypes from 'prop-types';

const ContactList = ({ contacts, onClick }) => {
  return (
    <div>
      <ul>
        {contacts.map(el => {
          return (
            <li key={el.id}>
              {el.name}:{el.number}
              <button type="button" onClick={onClick} id={el.id}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
