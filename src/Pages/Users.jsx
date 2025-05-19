import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
    const usersData=useLoaderData()

    const[users,setUser]=useState(usersData);
    console.log(users);

    const handleDeleteUser=(_id)=>{
        console.log(_id);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    //delete the user data
   fetch(`http://localhost:4000/users/${_id}`,{
    method:'DELETE'
   })
   .then(res=>res.json())
   .then(data=>{
    console.log('delete is done', data);
     if(data.deletedCount>0){
         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

    const remaining=users.filter(user=> user._id !== _id)
    setUser(remaining)
     }
    
   })
  }
});        

    }


    
    return (
        <div >
            <h2 className='text-center mt-6 text-4xl'>Users List:{users.length}</h2>

            <div className="flex  justify-center">
                 <div className="">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Id</th>
        {/* <th>Last Sign In</th> */}
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user=><tr>
        <th>1</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user._id}</td>
        {/* <td>{user?.creationTime}</td>
        <td>{user?.lastSignInTime}</td> */}
        <td className="flex  gap-5">
            <button className="btn bg-blue-400">View</button>
        <Link to={`/updateUser/${user._id}`} className="btn bg-blue-400">Edit</Link>
        <button onClick={()=>handleDeleteUser(user._id)} className="btn bg-red-600">X</button>
        </td>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
              
            </div>


        </div>
    );
};

export default Users;