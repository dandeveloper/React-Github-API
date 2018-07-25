import {
    fetchRepoCommits
} from '../services/github-services-api';

export function repoCommitsHasErrored(bool) {
    return {
        type: 'REPO_COMMITS_HAS_ERRORED',
        repoCommitsErrored: bool
    };
}

export function repoCommitsIsLoading(bool) {
    return {
        type: 'REPO_COMMITS_IS_LOADING',
        repoCommitsIsLoading: bool
    };
}

export function loadMoreVisibility(bool) {
    return {
        type: 'LOAD_MORE_VISIBILITY',
        loadMoreVisibility: bool
    };
}

export function pageControl(page) {
    console.log(page);
    return {
        type: 'PAGE_CONTROL',
        page
    };
}
export function repoCommitsFetchDataSuccess(repoCommits) {
    return {
        type: 'REPO_COMMITS_FETCH_DATA_SUCCESS',
        repoCommits
    };
}
export function addCommitsFetchDataSuccess(repoCommits) {
    return {
        type: 'ADD_COMMITS_FETCH_DATA_SUCCESS',
        repoCommits
    };
}

export function repoCommitsFetchData(fullName, page) {
    return (dispatch, getState) => {
        dispatch(repoCommitsIsLoading(true));
        fetchRepoCommits(fullName, page)
            .then((response) => {
                if (response.statusText !== "OK") {
                    throw Error(response.statusText);
                }

                dispatch(repoCommitsIsLoading(false));

                return response;
            })
            .then((response) => response.data)
            .then((repoCommits) => {
                if (page === 1) {
                    if (repoCommits.length < 20) {
                        dispatch(loadMoreVisibility(false))
                    } else {
                        dispatch(loadMoreVisibility(true))
                    }
                    dispatch(repoCommitsFetchDataSuccess(repoCommits))
                } else {
                    if (repoCommits.length < 20) {
                        dispatch(loadMoreVisibility(false))
                        dispatch(pageControl(1))
                    } else {
                        dispatch(loadMoreVisibility(true))
                    }
                    dispatch(addCommitsFetchDataSuccess(repoCommits))
                }
            })
            .catch(() => dispatch(repoCommitsHasErrored(true)));
    };
}
