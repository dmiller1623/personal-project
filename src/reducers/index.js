import { combineReducers } from 'redux';
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  relatedSearches: searchReducer
})

export default rootReducer