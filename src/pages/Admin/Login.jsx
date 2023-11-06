import React, { useState } from 'react';
import { json } from 'react-router-dom';
import owl from '../../assets/images/owl.png';

async function ValidateUser(username, password) {
  let res = await fetch('http://localhost:8000/login/' + username + '/' + password)
  .then(res => res.json())
  return res;
}
function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    ValidateUser(username, password).then((res) => {
      console.log(res);
      if (String(res) == 'true') {
        window.location.href = 'http://localhost:3000/';
      }
      else {
        alert('Incorrect username or password');
      }
    });
  }
  return (
    <div className="justify-center mt-[200px]">
      <div className="w-[500px] border-[2px] bg-nav-bg border-black m-auto mt-11 p-[10px] rounded-md h-fit flex flex-col pb-[10px]">
        <div className='border-b-grey border-b-[2px] mb-[10px]'>
          <img src={owl} className="h-[100px] pl-[0px] float-left"></img>
          <p className="text-[40px] text ml-[180px]">Login</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div >
              <p>Username</p>
              <input value={username} onChange={(e) => setUsername(e.target.value)} className="pl-[8px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </div>
            <div >
              <p>Password</p>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="pl-[8px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "></input>
            </div>
          </div>
          <div className='mt-[10px]'>
            <button className='rounded-md p-[5px] text-bold pr-[10px] pl-[10px] bg-slate-200 hover:bg-slate-300'>LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
