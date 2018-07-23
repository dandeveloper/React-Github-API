import React, { Component } from 'react';
import './ReposList.css';
import { connect } from 'react-redux';
import { reposFetchData } from '../../actions/repos';
import { Link } from 'react-router-dom';

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
                <Link to={repo.name}>{ repo.full_name }</Link>
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
