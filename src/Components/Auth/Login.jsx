import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Container } from "react-bootstrap";
import { useSetState } from "react-use";

const initialState = {
    email: '',
    password: ''
}

const Login = () => {
    const { state: ContextState, login } = useContext(AuthContext);
    const {
        isLoginPending,
        isLoggedIn,
        loginError
    } = ContextState;
    const [state, setState] = useSetState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = state;
        login(email, password);
        setState({
            email: '',
            password: ''
        });
    }

    return (
        <Container style={{ width: 500 }} className='my-4'>
            <form name="loginForm" onSubmit={handleSubmit}>
                <h3 className="text-center">Log In</h3>
                <div className="mb-3">
                    <label htmlFor="email" >Email address</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={e => setState({ email: e.target.value })}
                        value={state.email}
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        placeholder="Enter password"
                        type="password"
                        name="password"
                        onChange={e => setState({ password: e.target.value })}
                        value={state.password}
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />{' '}
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" value="Login">
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                {isLoginPending && <div>Please wait...</div>}
                {isLoggedIn && <div>Success.</div>}
                {loginError && <div>{loginError.message}</div>}
            </form>
        </Container>
    )
}

export default Login;