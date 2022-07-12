import * as ActionTypes from '../contexts/AppContext/action-types';

export async function loadCountries(dispatch) {
  dispatch({ type: ActionTypes.ASYNC_GET_COUNTRIES_DATA_START });

  try {
    const dataRaw = await fetch('https://restcountries.com/v3.1/all');

    const dataJson = await dataRaw.json();

    dispatch({
      type: ActionTypes.ASYNC_GET_COUNTRIES_DATA_END,
      payload: dataJson,
    });
  } catch (e) {
    dispatch({
      type: ActionTypes.ASYNC_GET_COUNTRIES_DATA_ERROR,
      payload: e.message,
    });
    throw new Error('new Error: ' + e.message);
  }
}
