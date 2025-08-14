import { configureStore, createSlice } from "@reduxjs/toolkit";

const FormDataSlice = createSlice({
  name: "formData",
  initialState: {
    "PK": "user#u003",

    "SK": "app#a001#borrower",

    "ApplicationId": "a001",

    "UserId": "u001",

    "Data": {
      "borrower_name": "",
      "ssn": "",
      "date_of_birth": "",
      "alternate_names": "",
      "citizenship": "",
      "marital_status": "",
      "type_of_credit": "",
      "number_of_dependents": "",
      "ages_of_dependents": "",
      "other_borrowers": "",
      "number_of_borrowers": "54131",
      "initials": "",
    },

    "EntityType": "application",

    "Category": "mortage",
  },
  reducers: {
    setFormData: (state, action) => {
      state.Data = {
        ...state.Data,
        ...action.payload,
      };
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
