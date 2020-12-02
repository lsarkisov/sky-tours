import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import * as services from 'services/api'

function* getPeopleSuccess(data) {
  const payload = yield call(() => services.people(data.payload))

  try {
    yield put({ type: types.PEOPLE[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.PEOPLE[FAILURE], error })
  }
}

export function* getPeopleRequest() {
  yield takeEvery(types.PEOPLE[REQUEST], getPeopleSuccess)
}
