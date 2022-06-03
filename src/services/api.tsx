import axios from 'axios';

const GitHubUser = 'llocus'

const GithubURL = 'https://api.github.com/'

export const apiGithub = axios.get(GithubURL + 'users/' + GitHubUser)
.then(function (response) {
  return response;
})

export const apiGithubRepos = axios.get(GithubURL + 'users/' + GitHubUser + '/repos')
.then(function (response) {
  return response;
})

export const apiGithubRepoLanguages = (languages: any) => axios.get(languages)
.then(function (response) {
  return response;
})