export function repoCommitsHasErrored(state = false, action) {
    switch (action.type) {
        case 'REPO_COMMITS_HAS_ERRORED':
            return action.repoCommitsErrored;

        default:
            return state;
    }
}

export function repoCommitsIsLoading(state = false, action) {
    switch (action.type) {
        case 'REPO_COMMITS_IS_LOADING':
            return action.repoCommitsIsLoading;

        default:
            return state;
    }
}

export function loadMoreVisibility(state = true, action) {
    switch (action.type) {
        case 'LOAD_MORE_VISIBILITY':
            return action.loadMoreVisibility;

        default:
            return state;
    }
}

export function pageControl(state = 1, action) {
    switch (action.type) {
        case 'PAGE_CONTROL':
            return action.page;

        default:
            return state;
    }
}

export function repoCommits(state = [], action) {
    switch (action.type) {
        case 'REPO_COMMITS_FETCH_DATA_SUCCESS':
            return action.repoCommits
        case 'ADD_COMMITS_FETCH_DATA_SUCCESS':
            return [...state, ...action.repoCommits]

        default:
            return state;
    }
}
