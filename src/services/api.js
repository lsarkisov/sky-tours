import { API_URL } from 'const/api'

function callApi(endpoint, headers) {
  return fetch(`${API_URL}${endpoint}`, headers)
    .then((response) => {
      return response.clone().json()
    })
    .then((response) => response)
    .catch((error) => error)
}

/* People
----------------------------------------*/
export const people = () => callApi(`/people`)
