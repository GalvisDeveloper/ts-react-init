import { useReducer, useEffect, useState, ChangeEvent } from "react";

interface AuthState {
    loading: boolean;
    token: string | null;
    username: string;
    name: string;
}

const initialState: AuthState = {
    loading: true,
    token: null,
    username: '',
    name: '',
}

type LoginPayload =
    | { username: string, name: string }

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }


const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logout':
            return {
                ...initialState,
                loading: false,
            };
        case 'login':
            const { username, name } = action.payload;
            return {
                loading: false,
                token: 'ABC-123',
                name,
                username,
            };
        default:
            return state;
    }
}

let initialStateCredentials = {
    name: '',
    username: '',
}

const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    const [credentials, setCredentials] = useState(initialStateCredentials)

    const { loading, token, name, username } = state;

    useEffect(() => {
        setTimeout(() => {
            logout();
        }, 1500)
    }, [])

    const login = () => {
        let data = {
            name: credentials.name,
            username: credentials.username,
        }
        dispatch({ type: 'login', payload: data })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
        setCredentials(initialStateCredentials);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value,
        });
    }

    if (loading) {
        return (<div className="alert alert-info">
            Loading...
        </div>)
    }

    return (
        <>
            <h3>Login</h3>

            {token ?
                <>
                    <div className="alert alert-success"> Authenticated as: {name} / {username}</div>
                    <button
                        className="btn btn-danger"
                        onClick={logout}
                    >
                        logout
                    </button>
                </>
                :
                <>
                    <div className="alert alert-danger"> Not authenticated </div>
                    <input onChange={handleChange} id='name' />
                    <br />
                    <input onChange={handleChange} id='username' />
                    <br />
                    <button
                        className="btn btn-primary"
                        onClick={login}
                    >
                        login
                    </button>

                </>
            }

        </>
    )
}

export default Login