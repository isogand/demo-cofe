import { createSelector, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name  : 'ui',
  initialState: { cartIsVisible:false ,notification:false },
  reducers : {
      toggle(state) {
          state.cartIsVisible = !state.cartIsVisible;
      },
      show(state){
          state.cartIsVisible = true;
      },
      showNotification(state, action){
        state.notification = {
         status: action.payload.status,
         title:action.payload.title,
         message:action.payload.message,
        };
      }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
