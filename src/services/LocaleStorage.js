export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

export const getItem = (key) => window.localStorage.getItem(key)


export const addItem = (key, value) => {
  window.localStorage.setItem(key, value)
}