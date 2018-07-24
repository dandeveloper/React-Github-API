import { fetchUserRepos } from '../services/github-services-api';

export function HasErrored(bool) {
  return {
      type: 'HAS_ERRORED',
      repoHasErrored: bool
  };
}

export function reposIsLoading(bool) {
  return {
      type: 'IS_LOADING',
      reposIsLoading: bool
  };
}

export function reposFetchDataSuccess(repos) {
  return {
      type: 'REPOS_FETCH_DATA_SUCCESS',
      repos
  };
}

export function reposFetchData(username) {
  return (dispatch) => {
      dispatch(reposIsLoading(true));
      fetchUserRepos(username)
          .then((response) => {
              if (response.statusText !== "OK") {
                  throw Error(response.statusText);
              }

              dispatch(reposIsLoading(false));

              return response;
          })
          .then((response) => {
              const repos = response.data.sort((a, b) => {
                const starsA = a.stargazers_count;
                const starsB = b.stargazers_count;
                let comparison = 0;
                if (starsA < starsB) {
                  comparison = 1;
                } else if (starsA > starsB) {
                  comparison = -1;
                }
                return comparison;
              });
              return repos;
            })
          .then((repos) => dispatch(reposFetchDataSuccess(repos)))
          .catch(() => dispatch(HasErrored(true)));
  };
}
