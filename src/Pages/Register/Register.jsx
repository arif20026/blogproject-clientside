import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    // const [registerError,setRegisterError] = useState('')
    // const[success,setSuccess] =useState(false)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const photoURL = form.photoURL.value
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password,displayName,photoURL)


        // setRegisterError('')
        // setSuccess('')



        if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/.test(password)) {

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password should be at least 6 characters and  contain a capital letter, a numeric character and a special character !",
                allowOutsideClick: false, // Prevent clicking outside the modal to close it
                confirmButtonText: 'OK', // Customize the text of the confirm button
                confirmButtonColor: '#3085d6', // Customize the color of the confirm button
                showCancelButton: false, // Remove the cancel button
                showCloseButton: false, // Remove the close button
              }).then((result) => {
                // The result value will be true when the "OK" button is clicked
                if (result.isConfirmed) {
                  // Handle the user clicking "OK"
                  console.log('User clicked OK');
                }
              });

            // setRegisterError('Password should be at least 6 characters and contain an uppercase letter, a numeric character, and a special character!');
            return;
        }
        


        createUser(email, password,displayName,photoURL)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
                // setSuccess(true)
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "User has been created",
                    showConfirmButton: false,
                    timer: 1500
                  });

            })
            .catch(error => {
                console.log(error)
                // setRegisterError(error.message)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    allowOutsideClick: false, // Prevent clicking outside the modal to close it
                    confirmButtonText: 'OK', // Customize the text of the confirm button
                    confirmButtonColor: '#3085d6', // Customize the color of the confirm button
                    showCancelButton: false, // Remove the cancel button
                    showCloseButton: false, // Remove the close button
                  }).then((result) => {
                    // The result value will be true when the "OK" button is clicked
                    if (result.isConfirmed) {
                      // Handle the user clicking "OK"
                      console.log('User clicked OK');
                    }
                  });
                  
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
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photoURL" className="input input-bordered" required />
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

                        {/* {
                            registerError && <p className="text-red-500  font-bold text-3xl">{registerError}</p>
                        }

                        {
                            success && <p className="text-green-800 font-bold text-3xl">Congratulation! User Created</p>
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;