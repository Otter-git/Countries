export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const SET_COUNTRY = '@@details/SET_COUNTRY';
export const CLEAR_DETAILS = '@@details/CLEAR_DETAILS';
export const SET_BORDERS = '@@details/SET_BORDERS';

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

const setBorders = (countries) => ({
  type: SET_BORDERS,
  payload: countries,
});

export const clearDetails = () => ({
  type: CLEAR_DETAILS,
});



export const loadCountryByName = (name) => (dispatch, _, { client, api }) => {
  dispatch(setLoading());

  client.get(api.searchByCountry(name))
    .then(({ data }) => dispatch(setCountry(data)))
    .catch((err) => dispatch(setError(err.message)))
}

export const loadBorders = (borders) => (dispatch, _, { client, api }) => {
  client.get(api.filterByCode(borders))
    .then(({ data }) => dispatch(setBorders(data.map((c) => c.name.official))))
    .catch(console.error)
}