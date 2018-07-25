import React, { Component } from 'react';
import './ReposList.css';
import { connect } from 'react-redux';
import { reposFetchData } from '../../actions/repos';
import { repoDetailsFetchData } from '../../actions/repoDetails';
import { repoCommitsFetchData } from '../../actions/repoCommits';

class ReposList extends Component {

  componentDidMount() {
    this.props.fetchData('globocom');
  }

  handleChangeRepo(name) {
    this.props.history.push(name);
    this.props.repoDetailsFetchData(`globocom/${name}`)
    this.props.repoCommitsFetchData(`globocom/${name}`, 1);
  }

  render() {
    return (
      <div className="repos">
        <ul className="repos-list">
          {
            this.props.repos.map((repo) => (
              <li key={repo.id}>
                <button className="repo-list__link" onClick={(e) => this.handleChangeRepo(repo.name, e)}>
                  <span className="repo-name">{ repo.name }</span>
                  <span className="repo-stars"> <i className="fa fa-star"></i> Estrelas { repo.stargazers_count }</span>
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      repos: state.repos,
      reposHasErrored: state.reposHasErrored,
      reposIsLoading: state.reposIsLoading,
      repoDetails: state.repoDetails,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (fullName) => dispatch(reposFetchData(fullName)),
      repoDetailsFetchData: (fullName) => dispatch(repoDetailsFetchData(fullName)),
      repoCommitsFetchData: (fullName) => dispatch(repoCommitsFetchData(fullName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReposList);
