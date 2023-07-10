import React from 'react'
import { useEffect,useState } from 'react'
import '../styles/Login.css'
import { users } from './database'

export default function signin() {
    const[phno, setPhno] = useState ('')
    const[password, setPassword] = useState ('')




    const handlephno = (e) =>{
      // console.log(e.target.value)
      setPhno(e.target.value)
    }

    const handlepassword = (e) => {
      setPassword(e.target.value)
    }


    const handleUser =(e)=> {
      e.preventDefault()
      const authenticatedUser = 
      users.find((user) => user.no===phno && user.password===password)

      if(authenticatedUser){
      console.log('Logged In')
      }
      else{
        console.log('Authentication Failed')
      }


    }











  return (
    <div>
        <div className='card_parent'>
            <div className="card">

    <h2> Sign In </h2>
    <h2>Sign Up </h2>

    <form onSubmit={handleUser}>
      <input type="text" className="" name="login" placeholder="Phone Number" onChange={handlephno}
      />
      <input type="password" id="password" className="" name="login" placeholder="password" onChange={handlepassword}/>
      <button type="submit" className="btn">Login</button>
      </form>
      </div>
    </div>
    </div>
  )
}