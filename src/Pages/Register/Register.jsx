import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const [registerError,setRegisterError] = useState('')
    const[success,setSuccess] =useState(false)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)


        setRegisterError('')
        setSuccess('')



        if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/.test(password)) {
            setRegisterError('Password should be at least 6 characters and contain an uppercase letter, a numeric character, and a special character!');
            return;
        }
        


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
                setSuccess(true)
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-blue-600 font-bold' to="/login">Login</Link> </p>

                        {
                            registerError && <p className="text-red-500  font-bold text-3xl">{registerError}</p>
                        }

                        {
                            success && <p className="text-green-800 font-bold text-3xl">Congratulation! User Created</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;