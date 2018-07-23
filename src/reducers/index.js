import { combineReducers } from 'redux';
import { repos, reposHasErrored, reposIsLoading } from './repos';

export default combineReducers({
    repos,
    reposHasErrored,
    reposIsLoading
});
