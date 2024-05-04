import { createAsyncThunk } from "@reduxjs/toolkit"; 
import aip from "../../aip";


const fetchUsers = createAsyncThunk('user/fetchAll', async (paylod, thunkAip) => {
    try {
        const response = await aip.getUsers;
        return response.data;                    
    } catch (err) {
        return thunkAip.rejectWithValue('try again later ')
    }
});

export default fetchUsers