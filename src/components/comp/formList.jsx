import PropTypes from 'prop-types';

const FormList = ({ filter, contacts, handleDeleteContacts }) => {
  return (
    <ul>
      {contacts
        .filter(el =>
          el.name.toLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map(el => (
          <li key={el.id}>
            <p>
              {el.name}: <span>{el.number}</span>
            </p>
            <button type="button" onClick={() => handleDeleteContacts(el.id)}>
              del
            </button>
          </li>
        ))}
    </ul>
  );
};

export default FormList;

FormList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  handleDeleteContacts: PropTypes.func.isRequired,
};
