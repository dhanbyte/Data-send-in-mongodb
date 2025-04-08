import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchUserData = createAsyncThunk(
  "FetchUserData",
  async () => {
    const response = await fetch("http://localhost:5000/api/contact");
    return response.json();
  }
);


const UserDataSlice = createSlice({
  name: "UserData",
  initialState: {
    isloading : false,
    data : null,
    isError: false,
  },
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(FetchUserData.fulfilled, (state,action)=>{
        state.isloading = false;
        state.data = action.payload;
    })
    .addCase(FetchUserData.pending,(state,action)=>{
        state.isloading = true;
        console.log("Fetch Data", action.payload);

    })
    .addCase(FetchUserData.rejected, (state,action)=>{
        state.isloading = true;
        console.log("Error", action.payload);
        
    })
  }
});

export default UserDataSlice.reducer;
