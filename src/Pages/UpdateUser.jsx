import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    const loadedUser=useLoaderData()
    console.log(loadedUser);

    const{name,email, _id}=loadedUser;
    
    const handleUpdate=(e)=>{
        e.preventDefault()
        console.log('update clicked');
        
        const form=e.target;
        const formData=new FormData(form)
        const updatedUser= Object.fromEntries(formData.entries())
        console.log(updatedUser);
        
        //send updated coffee to the db
        fetch(`http://localhost:4000/users/${_id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User updated successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            
        })

    }

    return (
     <div className="  min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold mb-7">Update: {name}</h1>
      
    </div>
    <div className=" w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleUpdate}  className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input defaultValue={name} name='name' type="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input defaultValue={email} name='email' type="email" className="input" placeholder="Email" />
          <button className="btn btn-primary mt-4">Update</button>
        </fieldset>
      </form>

    </div>
  </div>
</div>
    );
};

export default UpdateUser;