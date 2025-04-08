import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postFormData } from "./userFormAPI";



 
export interface FormData {
    name:string,
    email: string;
    phone: string;
    age: string;
}

interface UserFormState {
    loading:boolean,
    success:boolean,
    error: string | null;
}

const initialState:  UserFormState ={
    loading :false,
    success : false,
    error:null,
}
export const submitForm = createAsyncThunk (
    'userForm/submitForm',
    async (data: FormData) =>{
        const response = await postFormData(data);
        return response.data;
    }
)
const formSlice = createSlice({
    name: 'userForm',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(submitForm.pending,(state)=>{
            state.loading =true;
            state.error = null;
            state.success = false;
        })
        .addCase(submitForm.fulfilled, (state)=>{
            state.loading =false;
            state.success = true;
        })
        .addCase(submitForm.rejected , (state,action) =>{
            state.loading=false;
            state.success = false;
            state.error =  action.error.message || "Something want wrong";
        })

    }
})




export default formSlice.reducer