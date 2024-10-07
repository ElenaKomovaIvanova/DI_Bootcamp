import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../features/usersSlice.js";
import store from '../app/store.js'
import 'bootstrap/dist/css/bootstrap.min.css';


const UserData = () => {
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    return (
        <div className="p-3 text-primary-emphasis border border-primary-subtle rounded-3 container mt-8">
            <h3>Users:</h3>
            {users.map(user => (
                <ul className="list-unstyled p-3 bg-success-subtle">
                    <li className="list-group-item" key={user.id}> {user.name} <br/> phone: {user.phone} <br/> email: {user.email} </li>
                </ul>
            ))}
        </div>
    )
}

export default UserData;

