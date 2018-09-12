const addResourcesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_RESOURCES':
      return [...state, action.resource]
    case 'DELETE_RESOURCE':
      return action.resources
    default:
      return state
  }
}

export default addResourcesReducer