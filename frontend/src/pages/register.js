import React from 'react'
import { useState } from 'react'
import axios from 'axios'


function RegisterForm() {


  //create 5 states for each input field
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setNewUsername] = useState('')
  const [password, setNewPassword] = useState('')

  //create a function to handle the submit button
  const handleSubmit = (e) => {
    e.preventDefault()
    //create a new user object
    const newUser = {
      firstName,
      lastName,
      email,
      address,
      password
    }

    //send the user object to the backend use axios
   try {
    const url = "http://localhost:8070/admin/add";
    const res = axios.post(url, newUser);
    console.log(res);
    alert("Admin added successfully");
    window.location.reload();
    
   } catch (error) {
    console.log(error);    
   }

  }





  return (
    <div>
        <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" onChange={(e)=> setFirstName(e.target.value) } />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName"  onChange={(e)=> setLastName(e.target.value) }/>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email"  onChange={(e)=> setEmail(e.target.value) }/>

      <label htmlFor="newUsername">Username</label>
      <input type="text" id="newUsername" name="newUsername" onChange={(e)=> setNewUsername(e.target.value) } />

      <label htmlFor="newPassword">Password</label>
      <input type="password" id="newPassword" name="newPassword" onChange={(e)=> setNewPassword(e.target.value) } />

      <button type="submit">Register</button>
    </form>
    </div>
  )
}

export default RegisterForm