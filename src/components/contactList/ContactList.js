import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactsList.module.css';

const ContactsList = ({ children }) => {
  return <ul className={style.contactList}>{children}</ul>;
};

ContactsList.prototype = {
  children: PropTypes.node,
};
export default ContactsList;
