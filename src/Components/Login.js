import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

export default function Login() {
    return (
        <div className="body d-flex align-items-center" style={{ height: '90vh' }}>
            <div className="container">
                {/* <!-- Outer Row --> */}
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-5 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div className="row">
                                    <div className=" col-lg-6 d-none d-lg-block bg-login-image">
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-user"
                                                        id="exampleInputEmail"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."
                                                    />
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="exampleInputPassword"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheck"
                                                        />
                                                        <label className="custom-control-label" for="customCheck">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                    <br />
                                                </div>
                                                <NavLink
                                                    to='/dashboard'
                                                    className="btn btn-primary btn-user btn-block w-100"

                                                >
                                                    Login
                                                </NavLink>
                                                <hr />
                                                <NavLink
                                                    to='/dashboard'
                                                    className="btn btn-google w-100 rounded-pill active"

                                                >
                                                    {/* <i className="fab fa-google fa-fw"></i>  */}
                                                    Login with Google
                                                </NavLink>
                                                <br />
                                                <br />
                                                <NavLink
                                                    to='/dashboard'
                                                    className="btn btn-facebook w-100 rounded-pill active"
                                                >
                                                    {/* <i className="fab fa-facebook-f fa-fw"></i>  */}
                                                    Login with
                                                    Facebook
                                                </NavLink>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <NavLink
                                                    to='/forgot-password'
                                                    className="small">
                                                    Forgot Password?
                                                </NavLink>
                                            </div>
                                            <div className="text-center">
                                                <NavLink
                                                    to='/register'
                                                    className="small" style={{ textDecoration: 'none' }}>
                                                    Create an Account!
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}