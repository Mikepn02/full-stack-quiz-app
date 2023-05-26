import React from "react";
import '../../App.css'

const Login = () =>{
    return (
  <div className="container">
    <h1>Take<span>Quiz</span></h1>

    <p>sign in</p>
    <form action="" method="POST">
        <div className="your-inputs">
        <input type="text" name="email"  placeholder="email"/> <br />
        <input type="password" name="password" placeholder="password"/><br />
        
        <p>new to  <span className="logo">Take</span>Quiz?
        <a href="/register">Join now!!</a>
        </p>
        </div>

       <button type="submit">Login</button>
    </form>
  </div>
    )
}
export default Login