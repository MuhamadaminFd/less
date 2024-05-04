import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setIsLoadingUsers , setUsers, setUsersError } from '../../store/slice/usersSlice';
import aip from '../../aip';

const Users = () => {
    const {users, isLoadingUsers, usersError} = useSelector ((state) => state.users );
    const dispatch = setDispatch();


    useEffect (() => {
        dispatch(setIsLoadingUsers(true));
        aip
        .getUsers()
        .then((response) => dispatch (setUsers(response.data)))
        .catch((err) => dispatch (setUsersError('try again later')))
    }, []);

    return (
    <div>
        {isLoadingUsers && 'loadin...'}
        {usersError && usersError}
        {users.length && users.map((el) => (
            <div key={`user-${el.id}`}>{el.name} - {el.email}</div>
        ))}
    </div>
  )

  
}


  


export default Users
