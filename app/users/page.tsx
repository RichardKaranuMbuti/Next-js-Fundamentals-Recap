import { link } from 'fs';
import React from 'react'

interface User {
    id : number ;
    name: string ;
    email: string ;
}

const UsersPage = async () => {
   const res = await fetch(
    'https://jsonplaceholder.typicode.com/users/',
    // {cache : 'no-store'}
    // {next : {revalidate : 10}} update cache after 10 seconds
  );
  
   const users: User[] = await res.json();
  return (
    <div>
      <>
      <h1>Users</h1>
      <p>{ new Date().toLocaleTimeString()}</p>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => <tr key={user.id}>
          <th>{user.name}</th>
          <th></th>{user.email}</tr> )}
        </tbody>
       
      </table>
      </>
      
    </div>
  )
}

export default UsersPage
