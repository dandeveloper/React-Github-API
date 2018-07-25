import React, { Component } from 'react';
import './RepoDetails.css';
import { connect } from 'react-redux';
import { repoDetailsFetchData } from '../../actions/repoDetails';
import { repoCommitsFetchData } from '../../actions/repoCommits';

class RepoDetails extends Component {

  constructor() {
    super()
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }
  componentDidMount() {

    const urlParams = this.props.match.params.repo;

    this.props.repoDetailsFetchData(`globocom/${urlParams}`);
    this.props.repoCommitsFetchData(`globocom/${urlParams}`, 1);
    console.log(this.props.repoCommits);

  }

  handleLoadMore() {
    const urlParams = window.location.pathname;
    this.page += 1;
    this.props.repoCommitsFetchData(`globocom${urlParams}`, this.page);
    console.log(this.props.loadMoreVisibility);
  }

  render() {
    return (
      <div className="repo-details">
        <h1 className="repo-details__name">{ this.props.full_name }</h1>
        <p className="repo-details__description">{ this.props.description }</p>
        <div className="repo-details__info">
          <span><i className="fa fa-star"></i> Estrelas { this.props.stargazers_count }</span>
          <span><i className="fa fa-code-fork"></i> Forks { this.props.forks_count }</span>
        </div>
        <h2 className="repo-details__list-title">Commits <i className="fa fa-github-alt" aria-hidden="true"></i></h2>
        <ul className="repo-details__commits">
        {
            this.props.repoCommits.map((commit) => (
              <li className="repo-details__commits-item" key={commit.sha}>
                <a href={commit.html_url} target="_blank">
                  <div className="commit">
                    <span>{commit.commit.message}</span>
                  </div>
                </a>
              </li>
            ))
        }
        </ul>
        <button className="btn-carregar-mais"
        style={{ display: this.props.loadMoreVisibility ? 'block' : 'none' }}
        onClick={ this.handleLoadMore }>Carregar Mais</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      full_name: state.repoDetails.full_name,
      description: state.repoDetails.description,
      stargazers_count: state.repoDetails.stargazers_count,
      forks_count: state.repoDetails.forks_count,
      hasErrored: state.repoDetailsHasErrored,
      isLoading: state.repoDetailsIsLoading,
      repoCommits: state.repoCommits,
      loadMoreVisibility: state.loadMoreVisibility,
      commitPages: state.commitPages,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    repoDetailsFetchData: (fullName) => dispatch(repoDetailsFetchData(fullName)),
    repoCommitsFetchData: (fullName, page) => dispatch(repoCommitsFetchData(fullName, page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetails);
