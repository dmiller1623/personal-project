const searchReducer = (state = [], action) => {
  switch(action.type) {
    case 'SEARCH_RELATED':
      return action.searchedRelated
      default:
       return state
  }
}

export default searchReducer