import React, { Component } from 'react';
import './ReposList.css';
import { connect } from 'react-redux';
import { reposFetchData } from '../../actions/repos';

class ReposList extends Component {

  componentDidMount() {
    this.props.fetchData('globocom');
  }

  render() {
    console.log(this.props.repos);

    return (
      <div className="repos">
        <ul className="repos-list">
          {
            this.props.repos.map((repo) => (
              <li key={repo.id}>
                { repo.full_name }
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
      hasErrored: state.reposHasErrored,
      isLoading: state.reposIsLoading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (fullName) => dispatch(reposFetchData(fullName))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReposList);
