// import * as types from './actionType'

// const initialState = {
//     carts: []
// };

// const cartReducer = (state = initialState, action) => {
//     console.log("reducer", action);
//     switch (action.type) {
//         case types.GET_CARD_ITEM:
//             return {
//                 ...state,
//                 carts: action.payload,
//             };
//         case types.DELETE_CARD_ITEM:
//         case types.ADD_CARD_ITEM:
//             // const tempProduct = { ...action.payload };
//             console.log('value', action.payload);
//             console.log("carts", state.carts);
//             // return state.carts.push(action.payload)
//             // return {
//             //     ...state,
//             //     carts: [...action.payload],
//             // }
//             // return { carts: [...state.carts, action.payload] };
//             return {
//                 ...state,
//                 ...action.payload
//             };

//         default:
//             return state;
//     }
// }

// export default cartReducer;

// // const itemIndex = state.cartItems?.findIndex((item) => item.id === action.payload.id)
// // if (itemIndex >= 0) {
// //     return state.cartItems[itemIndex].cardQuantity += 1
// // }
// // else {
// //     const tempProduct = { ...action.payload, cardQuantity: 1 };
// //     return state.cartItems.push(tempProduct)
// // }