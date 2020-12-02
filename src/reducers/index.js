import { combineReducers } from 'redux'
import people from './people'
import person from './person'

const reducers = combineReducers({
  people,
  person,
})

export default reducers