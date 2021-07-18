import { createStore, combineReducers } from 'redux';
import CustomersReducer from '../Reducers/Customers'
import WinnersReducer from '../Reducers/Winners';

export default () => {
  const store = createStore(
    combineReducers({
      customers: CustomersReducer,
      winners: WinnersReducer
    }),
  );

  return store;
};
