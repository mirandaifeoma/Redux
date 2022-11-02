export const inc = 'increment'
export const dec = 'decrement'
export const reset = 'reset'


export const Increment = () => { 
  return { 
    type : inc
  }
}

export const Decrement = () => { 
  return { 
    type : dec
  }
}

export const Reset= () => { 
  return { 
    type : reset
  }
}