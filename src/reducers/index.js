import { combineReducers } from 'redux';
import { repos, reposHasErrored, reposIsLoading } from './repos';
import { repoDetails, repoDetailsHasErrored, repoDetailsIsLoading } from './repoDetails';

export default combineReducers({
    repos,
    reposHasErrored,
    reposIsLoading,
    repoDetails,
    repoDetailsHasErrored,
    repoDetailsIsLoading,
});
