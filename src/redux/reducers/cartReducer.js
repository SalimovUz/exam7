const initialState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Logika qo'shish
      return state;
    case "REMOVE_FROM_CART":
      // Logika olib tashlash
      return state;
    case "UPDATE_QUANTITY":
      // Miqdorni yangilash logikasi
      return state;
    default:
      return state;
  }
};

export default cartReducer;
