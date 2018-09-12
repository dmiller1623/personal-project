export const searchRelated = (searchedRelated) => ({
  type: 'SEARCH_RELATED',
  searchedRelated
}) 

export const addToResources = (resource) => ({
  type: 'ADD_TO_RESOURCES',
  resource
})

export const removeResource = (resources) => ({
  type: 'DELETE_RESOURCE',
  resources
})