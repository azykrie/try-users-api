import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const endpoint = 'http://127.0.0.1:8000/api/users/'
  const [users, setUsers] = useState([]);

  const fecthUser = async() =>{
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(()=>{
    fecthUser();
  }, []);

  return (
    <>
    <h1>Hello</h1>
    {users?.map((user)=>
    <div key={user.id}>
      {user.name}
    </div>)}
    </>
  )
}

export default App
