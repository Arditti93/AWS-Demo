import React from "react";
import { useState } from "react";
import { register } from './utils';

const App = () => {

const [username, setUsername] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState() 

const submitHandler = async (event) => {
  event.preventDefault()
  await register (username, email, password)
}
  return (
    <div>
      <h1>ME NO LIKE CSS</h1>
    
      <form onSubmit ={submitHandler}>
            <label> Username:
                <input onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br></br>

            <label> Email:
                <input onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br></br>

            <label> password:
                <input onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br></br>
            <button type='submit'>Click here to register</button>
        </form>

    </div>
  );
};

export default App;
