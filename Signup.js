import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate , Link } from "react-route-dom"
function Login() {
    const history=useNavigate();
    const [email,sentEmail]=useState('')
    const [password,setPassword]=useState('')
    async function SubmitEvent(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exit"){
                    alert("User already exists")
                }
                else if(res.data=="noteexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);

            })

        }
        catch(e) {
            console.log(e);
        }
    }
    return (
        <div className="login">
            <h1>Signup</h1>
            <form action="POST">
                <input type="email" onChange={(e) =>{ sentEmail(e.target.value)}} placeholder="Email" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/">Login Page</Link>
        </div>
    )
}