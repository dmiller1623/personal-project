const addResourcesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_RESOURCES':
      return [...state, action.resource]
    default:
      return state
  }
}

export default addResourcesReducer