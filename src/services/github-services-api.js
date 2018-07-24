import axios from 'axios';

const Authorization = 'token 5318ccc4f59bb9a72d68ec87ffecc86a533a8bb6';
const headers = {
  Authorization,
  Accept: 'application/vnd.github.v3+json',
};

export function fetchUser(username) {
  return axios.get(`https://api.github.com/users/${username}`, {
    headers,
  });
}

export function fetchUserRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`, {
    headers
  });
}

export function fetchRepo(fullName) {
  return axios.get(`https://api.github.com/repos/${fullName}`, {
    headers,
  });
}

export function fetchRepoCommits(fullName, page) {
  return axios.get(`https://api.github.com/repos/${fullName}/commits?per_page=20&page=${page}`, {
    headers,
  });
}
