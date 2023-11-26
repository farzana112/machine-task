import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../api/userApi" ;

export const Login = createAsyncThunk("login", async (payload) => {
  try {
    console.log(payload);
    const response = await userApi.post("auth/login", payload);
    return response?.data;
  } catch (err) {
    console.log(err);
  }
});

export const Register=createAsyncThunk("register", async(payload) => {
  try {
    console.log(payload)
    const response=await userApi.post("auth/register",payload)
    console.log("response data");
    console.log(response?.data)
    return response?.data

  } catch(err) {
   console.log(err)
  }
})

export const getAllUsers=createAsyncThunk("users", async(payload) => {
  try {
     console.log(payload)
    const response=await userApi.get("users",payload)
    console.log("response data");
    console.log(response?.data)
    return response?.data

  } catch(err) {
   console.log(err)
  }
})




const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
// export const { } = seekerSlice.actions;
export default userSlice.reducer;