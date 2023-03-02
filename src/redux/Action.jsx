
export const addMovies = (item) =>{
    return{
      type:'ADD',
      payload:item
    }
}

export const removeMovies = (item) =>{
  return{
    type:'REMOVE',
    payload:item
  }
}

export const clearMovies = (item) =>{
  return{
    type:'CLEAR',
    payload:item
  }
}