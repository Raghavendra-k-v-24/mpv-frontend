import { configureStore, createSlice } from "@reduxjs/toolkit";

const FormDataSlice = createSlice({
  name: "formData",
  initialState: {},
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

const store = configureStore({
  reducer: {
    formData: FormDataSlice.reducer,
  },
});

export const FORMDATA = FormDataSlice.actions;
export default store;
