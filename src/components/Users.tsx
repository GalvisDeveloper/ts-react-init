import useUsers from "../hooks/useUsers";
import { User } from "../interfaces/reqRes";


const Users = () => {

    const { users, pageRef, nextDisabled, nextPage, prevPage } = useUsers();

    const renderItem = (user: User) => {
        return (
            <tr key={user.id}>
                <td>
                    <img src={user.avatar} alt={user.first_name} style={{ width: 40, borderRadius: 100 }} />
                </td>
                <td><p>{user.first_name} {user.last_name}</p></td>
                <td><p>{user.email}</p></td>
            </tr>
        )
    }

    return (
        <>
            <h3>Users: </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => renderItem(user))}
                </tbody>
            </table>

            <div style={{ display: 'flex', justifyContent: 'space-between', width: 'auto' }}>
                <button onClick={prevPage} disabled={pageRef.current === 1}>
                    Previous
                </button>

                <button onClick={nextPage} disabled={nextDisabled} >
                    Next
                </button>
            </div>
        </>
    )
}

export default Users