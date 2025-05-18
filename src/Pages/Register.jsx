import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Components/Providers/AuthProvider';

const Register = () => {

    const {createUser}=useContext(AuthContext)
    console.log(createUser);
    


    const handleRegister=(e)=>{
        e.preventDefault()

        const form=e.target;
        
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        
        
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            
        })
        
    }

    return (
      
           
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-7">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div>Already have an account? <Link className='text-blue-600' to={'/login'}>Login</Link></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
       
    );
};

export default Register;