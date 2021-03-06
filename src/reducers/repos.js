export function reposHasErrored(state = false, action) {
  switch (action.type) {
      case 'REPOS_HAS_ERRORED':
          return action.reposHasErrored;
      default:
          return state;
  }
}

export function reposIsLoading(state = false, action) {
  switch (action.type) {
      case 'REPOS_IS_LOADING':
          return action.reposIsLoading;
      default:
          return state;
  }
}

export function repos(state = [], action) {
  switch (action.type) {
      case 'REPOS_FETCH_DATA_SUCCESS':
          return action.repos;
      default:
          return state;
  }
}
