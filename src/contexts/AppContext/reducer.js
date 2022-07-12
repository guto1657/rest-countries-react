import * as ActionTypes from './action-types';

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ASYNC_GET_COUNTRIES_DATA_START: {
      return { ...state, loading: true, hasError: false };
    }

    case ActionTypes.ASYNC_GET_COUNTRIES_DATA_END: {
      return {
        ...state,
        allCountries: action.payload,
        loading: false,
        hasError: false,
        errorMessage: '',
      };
    }

    case ActionTypes.ASYNC_GET_COUNTRIES_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage: action.payload,
      };
    }

    case ActionTypes.UPDATE_SEARCH_VALUE: {
      return { ...state, searchValue: action.payload };
    }

    case ActionTypes.UPDATE_SELECT_FILTER: {
      return { ...state, selectFilter: action.payload };
    }

    case ActionTypes.SWITCH_THEME: {
      state.darkMode
        ? localStorage.setItem('theme', 'light')
        : localStorage.setItem('theme', 'dark');

      return { ...state, darkMode: !state.darkMode };
    }

    case ActionTypes.CHECK_SAVED_THEME: {
      let savedTheme = localStorage.getItem('theme');

      if (savedTheme == null || savedTheme == undefined) {
        localStorage.setItem('theme', 'light');
        return { ...state, darkMode: false };
      }

      if (savedTheme == 'light') {
        return { ...state, darkMode: false };
      } else {
        return { ...state, darkMode: true };
      }
    }

    default: {
      return { ...state };
    }
  }
};
