import { combineReducers } from 'redux';
import { repos, reposHasErrored, reposIsLoading } from './repos';
import { repoDetails, repoDetailsHasErrored, repoDetailsIsLoading } from './repoDetails';
import { repoCommits, repoCommitsHasErrored, repoCommitsIsLoading, loadMoreVisibility, pageControl } from './repoCommits';

export default combineReducers({
    repos,
    reposHasErrored,
    reposIsLoading,
    repoDetails,
    repoDetailsHasErrored,
    repoDetailsIsLoading,
    repoCommits,
    repoCommitsHasErrored,
    repoCommitsIsLoading,
    loadMoreVisibility,
    pageControl,
});
