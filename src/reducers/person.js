import * as types from 'const/requests'

const person = (state = {}, action) => {
  switch (action.type) {
    case types.PERSON:
      return Object.assign({}, state, {
        info: action.payload,
      })

    default:
      return Object.assign({}, state)
  }
}

export default person
