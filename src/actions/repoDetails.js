import { fetchRepo } from '../services/github-services-api';

export function repoDetailsHasErrored(bool) {
  return {
      type: 'REPO_DETAILS_HAS_ERRORED',
      repoDetailsErrored: bool
  };
}

export function repoDetailsIsLoading(bool) {
  return {
      type: 'REPO_DETAILS_IS_LOADING',
      repoDetailsIsLoading: bool
  };
}

export function repoDetailsFetchDataSuccess(repoDetails) {
  return {
      type: 'REPO_DETAILS_FETCH_DATA_SUCCESS',
      repoDetails
  };
}

export function repoDetailsFetchData(fullName) {
  return (dispatch) => {
      dispatch(repoDetailsIsLoading(true));
      fetchRepo(fullName)
          .then((response) => {
              if (response.statusText !== "OK") {
                  throw Error(response.statusText);
              }

              dispatch(repoDetailsIsLoading(false));

              return response;
          })
          .then((response) => response.data)
          .then((repoDetails) => dispatch(repoDetailsFetchDataSuccess(repoDetails)))
          .catch(() => dispatch(repoDetailsHasErrored(true)));
  };
}
