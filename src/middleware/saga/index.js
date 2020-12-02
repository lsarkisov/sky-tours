import { all } from 'redux-saga/effects'
import { getPeopleRequest } from 'middleware/saga/people'

export default function* rootSaga() {
  yield all([getPeopleRequest()])
}
