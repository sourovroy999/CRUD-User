import React, { useContext } from 'react';
import { AuthContext } from '../Components/Providers/AuthProvider';
import { Link } from 'react-router';

const Login = () => {
    const {logInUser,googleSignIn}=useContext(AuthContext)



       const handleGoogleLogIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result);
            
        })
        .catch(err=>{
            console.log(err.message);
            
        })
    }

    const handleLogIn=(e)=>{
        e.preventDefault()
        
        const form=e.target;

        const email=form.email.value;
        const password=form.password.value;
        
        logInUser(email,password)
        .then(result=>{
            console.log(result.user);
            alert('Log in Successfully')
            
        })
        .catch(error=>console.log(error)
        )

    }
    return (
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold mb-7">Log In</h1>
      
    </div>
    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
      <form onSubmit={handleLogIn} className="card-body">
        <fieldset className="fieldset">
         
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div>Don't an account? <Link className='text-blue-600' to={'/register'}>Register</Link></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>

      <button onClick={handleGoogleLogIn} className='btn'>Sign in with Google</button>
    </div>
  </div>
</div>
    );
};

export default Login;