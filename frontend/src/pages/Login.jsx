import React ,{useState}from "react";
import {Link,useNavigate } from 'react-router-dom'
import { UserData } from "../context/UserContext";

const Login = ()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {loginUser,btnLoading} = UserData();
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault()//
        loginUser(email,password,navigate);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
           <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-center mb-4">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                    alt="Pinterest Logo"
                    className="h-12"
                />

            </div>
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                Log in to see more
            </h2>
            <form onSubmit={submitHandler}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
                      placeholder = "Enter Yout email"
                      value={email}
                      onChange = {(e)=>setEmail(e.target.value)}
                      required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
                      placeholder = "Enter Yout Password"
                      value={password}
                      onChange = {(e)=>setPassword(e.target.value)}
                      required
                    />
                </div>
                <button
                    type="Submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200">
                    Log in 

                </button>
       
            </form>
            <div className="mt-6 text-center text-sm text-gray-400 font-meduim">
                OR
            </div>
                <div className="mt-4 text-center text-sm text-gray-600">
                    <span>Not on Pintrest Yet?</span>
                    <Link to="/register" className="font-medium text-red-600 hover:underline">
                        Register
                    </Link>
                </div>
           </div>
        </div>
    )
}

export default Login;