import actions from '../actionTypes';
import initialState from './initialState';

export default function customerReducer(state = initialState.customers, action) {
  switch (action.type) {
    case actions.LOAD_CUSTOMERS_SUCCESS:
      return action.customers
        .sort((customer1, customer2) => customer1.name.localeCompare(customer2.name));
    case actions.CREATE_CUSTOMER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.customer),

      ];
    case actions.UPDATE_CUSTOMER_SUCCESS:
      return [
        ...state.filter(customer => customer._id !== action.customer._id)
          .sort((customer1, customer2) => customer1.name.localeCompare(customer2.name)),
        Object.assign({}, action.customer),
      ];
    case actions.REMOVE_CUSTOMER_SUCCESS:

      return [
        ...state.filter(customer => customer._id !== action.id)
          .sort((customer1, customer2) => customer1.name.localeCompare(customer2.name)),
      ];
    default:
      return state;
  }
}
