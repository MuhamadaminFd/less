import {createSlice} from '@reduxjs/toolkit';
import fetchUsers from '../reducers/usersCreator';



const initialSate = {
    user: [],
    isLoadingUsers: false,
    usersError:'',
};

const usersSlice = createSlice({
    initialState,
    name:'Users',
    reducers: {
        setUsers: (state, action ) => {
            state.users = action.payload;
            state.isLoadingUsers = false;
        },

        setIsLoadingUsers: (state) => {
            state.isLoadingUsers = true;
            state.users  = [];
            state.usersError = '';
        },


        setUsersError: (state, action) => {
            state.usersError = action.payload;
            state.isLoadingUsers = false;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoadingUsers = true;
            state.users  = [];
            state.usersError = '';
        } );

        builder.addCase(fetchUsers.fulfilled, (state , action) => {
            state.usersError = action.payload;
            state.isLoadingUsers = false;
        });

        builder.addCase(fetchUsers.rejected, (state , action) => {
            state.usersError = action.payload;
            state.isLoadingUsers = false;
        });
    }
});


const usersReducer = usersSlice.reducer; 

export const {setIsLoadingUsers, setUsers , setUsersError} = usersSlice.actions;
export default usersReducer