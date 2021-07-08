import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addContactSuccess,
  deleteContactSuccess,
  filterUpdate,
  fetchContactSuccess,
} from './phoneBook-actions';

const ContactsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const FilterReducer = createReducer('', {
  [filterUpdate]: (_, { payload }) => payload,
});

export default combineReducers({
  ContactsReducer,
  FilterReducer,
});
