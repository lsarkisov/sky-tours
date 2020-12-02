import * as types from 'const/requests'
import { REQUEST } from 'const/actions'

export const getPeopleAction = () => ({
  type: types.PEOPLE[REQUEST],
  payload: null,
})

