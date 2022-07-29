import PropTypes from 'prop-types';

const Filter = ({ handleChange }) => {
  return (
    <>
      <p></p>
      <input
        type="text"
        placeholder="Enter name"
        name="filter"
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
