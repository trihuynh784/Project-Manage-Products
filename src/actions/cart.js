export const addToCart = (id, info, quantity = 1) => {
  return ({
    type: "ADD_TO_CART",
    id: id,
    info: info,
    quantity: quantity
  })
}

export const updateQuantity = (id, info, quantity = 1) => {
  return ({
    type: "UPDATE_QUANTITY",
    id: id,
    info: info,
    quantity: quantity
  })
}

export const deleteAll = () => {
  return ({
    type: "DELETE_ALL",
  })
}

export const deleteProduct = (id) => {
  return ({
    type: "DELETE_PRODUCT",
    id: id
  })
}