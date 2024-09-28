/* eslint-disable no-unused-vars */
import React from "react";


function LoginPage(){
  return(
    <div>
      <section className="">
          <div className="flex flex-col gap-3 items-center my-3">
              <h1 className="text-3xl ">Login</h1>
              <input type="text" className="h-8 size-64" placeholder="your@email"/>
              <input type="text" className="h-8 size-64" placeholder="password" />
              <button className="border border-red-500 p-1 px-[110px] bg-[primary] " value>Login</button>
              <span>Dont have an account yet? <a href="">Login Here</a></span>
          </div>
          <div className="hidden">
              <h1>Register</h1>
              <input type="text" placeholder="your@email"/>
              <input type="text" placeholder="name"/>
              <input type="text" placeholder="password" />
              <button>Login</button>
              <span>Already signed up? <a href="">Login Here</a></span>
          </div>
      </section>
    </div>
  )
}
export default LoginPage