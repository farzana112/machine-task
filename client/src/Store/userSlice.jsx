import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
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

export const GetAllUsers=createAsyncThunk("users", async(payload) => {
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
  allUsers:[]
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut:(state)=>{
      console.log("logout")
state.user=null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Login.fulfilled,(state,{payload})=> {
      state.user=payload.user
     
      state.user.token=payload.token
    })
    .addCase(GetAllUsers.fulfilled,(state,{payload})=> {
      console.log("loging users");
      console.log(payload)
      state.allUsers=payload.users
      
    })
  },
});
export const { logOut} = userSlice.actions;
export default userSlice.reducer;