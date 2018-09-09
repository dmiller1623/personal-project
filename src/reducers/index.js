import { combineReducers } from 'redux';
import searchReducer from './searchReducer'
import addResourcesReducer from './addResourcesReducer'

const rootReducer = combineReducers({
  relatedSearches: searchReducer,
  additionalResources: addResourcesReducer
})

export default rootReducer