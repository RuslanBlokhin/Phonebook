import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/phoneBook/phoneBook-actions';
import contactsSelectors from '../../redux/phoneBook/phoneBook-selectors';

const Filter = ({ value, onChange }) => (
  <>
    <h3>Find contacts by name</h3>
    <input type="text" name="filter" value={value} onChange={onChange} />
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.filterUpdate(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
