import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Components/Providers/AuthProvider';

const Register = () => {

    const {createUser,googleSignIn}=useContext(AuthContext)
    

    const handleGoogleLogIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result);
            
        })
        .catch(err=>{
            console.log(err.message);
            
        })
    }


    const handleRegister=(e)=>{
        e.preventDefault()

        const form=e.target;

        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        
        
        createUser(email,password)
        .then(result=>{
            
            
            console.log(result.user);
            const creationTime=result.user.metadata.creationTime;
            const lastSignInTime
=result.user.metadata.lastSignInTime
;

            const userInfo={name,email,creationTime,lastSignInTime
}

            fetch('http://localhost:4000/users',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(userInfo)

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                
            })
            



            
        })
        .catch(error=>{
            console.log('error', error);
            
        })


        
    }

    return (
      
           
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold mb-7">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div>Already have an account? <Link className='text-blue-600' to={'/login'}>Login</Link></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>

      <button onClick={handleGoogleLogIn} className='btn'>Sign in with Google</button>
    </div>
  </div>
</div>
       
    );
};

export default Register;