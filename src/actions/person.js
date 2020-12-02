import * as types from 'const/requests'

export const onPersonSelectedAction = (payload) => ({
  type: types.PERSON,
  payload,
})
