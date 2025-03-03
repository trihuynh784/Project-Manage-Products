const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [
        ...state,
        {
          id: action.id,
          info: action.info,
          quantity: 1,
        },
      ];
    case "UPDATE_QUANTITY":
      return state.map((item) => {
        if (item.id === action.id) {
          if (action.quantity === -1 && item.quantity === 1) {
            return item;
          } else {
            return {
              ...item,
              quantity: item.quantity + action.quantity,
            };
          }
        } else return item;
      });
    case "DELETE_PRODUCT":
      return state.filter(item => item.id !== action.id);
    case "DELETE_ALL":
      return [];
    default:
      break;
  }
  return state;
};

export default cartReducer;
