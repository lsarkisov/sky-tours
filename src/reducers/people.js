import * as types from 'const/requests'
import { SUCCESS, FAILURE } from 'const/actions'

const people = (state = {}, action) => {
  switch (action.type) {
    case types.PEOPLE[SUCCESS]:
      return Object.assign({}, state, {
        all: action.payload,
      })

    case types.PEOPLE[FAILURE]:
      return Object.assign({}, state, {
        all: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default people
