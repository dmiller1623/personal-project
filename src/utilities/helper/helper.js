export const cleanData = (data) => {
  const keys = Object.keys(data)
  
  const searchedMatch = data[keys].Info.map(match => {
    return match
  })

  const searchedRelated = data[keys].Results.map(match => {
    return match
  })

  const allMatches = [...searchedMatch, ...searchedRelated]
  return allMatches
}

