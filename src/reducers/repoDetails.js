export function repoDetailsHasErrored(state = false, action) {
    switch (action.type) {
        case 'REPO_DETAILS_HAS_ERRORED':
            return action.repoDetailsErrored;

        default:
            return state;
    }
}

export function repoDetailsIsLoading(state = false, action) {
    switch (action.type) {
        case 'REPO_DETAILS_IS_LOADING':
            return action.repoDetailsIsLoading;

        default:
            return state;
    }
}

export function repoDetails(state = {}, action) {
    switch (action.type) {
        case 'REPO_DETAILS_FETCH_DATA_SUCCESS':
            return action.repoDetails;

        default:
            return state;
    }
}
