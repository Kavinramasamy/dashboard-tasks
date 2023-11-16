import { NavLink } from "react-router-dom";


export default function RegisterPage() {
    return (
        <div className="body d-flex align-items-center" >
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image ">
                            </div>
                            <div className="col-lg-7 ">
                                <div className="p-5 d-flex flex-column justify-content-around h-100">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4 ">Create an Account!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user rounded-pill"
                                                    id="exampleFirstName"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user rounded-pill"
                                                    id="exampleLastName"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control form-control-user rounded-pill"
                                                id="exampleInputEmail"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-user rounded-pill"
                                                    id="exampleInputPassword"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-user rounded-pill"
                                                    id="exampleRepeatPassword"
                                                    placeholder="Repeat Password"
                                                />
                                            </div>
                                        </div>
                                        <NavLink
                                            to='/'
                                            className="btn btn-primary btn-user btn-block w-100 rounded-pill"
                                        >
                                            Register Account
                                        </NavLink>
                                        <hr />
                                        <NavLink
                                            to='/'
                                            className=" btn-google btn-user btn-block w-100 rounded-pill d-flex align-items-center justify-content-center"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            Register with Google
                                        </NavLink>
                                        <NavLink
                                            to='/'
                                            className=" btn-facebook btn-user btn-block w-100 rounded-pill d-flex align-items-center justify-content-center"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            Register with
                                            Facebook
                                        </NavLink>
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <NavLink
                                            to='/forgot-password'
                                            className="small btn"
                                        >
                                            Forget Password
                                        </NavLink>
                                    </div>
                                    <div className="text-center">
                                        <NavLink
                                            to='/login'
                                            className="small btn"
                                        >
                                            Already have an account? Login!
                                        </NavLink>
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