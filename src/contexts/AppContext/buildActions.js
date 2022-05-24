import { loadCountries } from '../../helpers/loadCountries';
import * as ActionsTypes from './action-types';

export const buildActions = (dispatch) => {
  return {
    getCountries: () => loadCountries(dispatch),
    updateSearchValue: (value) => dispatch({ type: ActionsTypes.UPDATE_SEARCH_VALUE, payload: value }),
    updateSelectFilter: (value) => dispatch({ type: ActionsTypes.UPDATE_SELECT_FILTER, payload: value }),
    switchTheme: () => dispatch({ type: ActionsTypes.SWITCH_THEME }),
    checkSavedTheme: () => dispatch({ type: ActionsTypes.CHECK_SAVED_THEME }),
  };
};
