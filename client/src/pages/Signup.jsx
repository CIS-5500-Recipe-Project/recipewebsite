import Topbar from "../components/Topbar";
import { register, getUserByEmial } from "../fetcher";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");
    const[dupplicate, setDupplicate] = useState("");
    const navigate = useNavigate();


    // const handleSignup = (event, value) => {
    //     console.log("test");
    //     // if(password.length>=8 && userName.length >0 && password.length>0){
    //     //     register(email,userName,password).then((res) => {
    //     //         console.log(res);
    //     //     });
    //     // }    
    // };


  return (
    <div>
      <Topbar />
      <div>
      <div className="uk-grid-collapse" data-uk-grid>
          <div className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center" data-uk-height-viewport>
            <div className="uk-width-3-4@s">
              <div className="uk-text-center uk-margin-bottom">
                <span className="uk-logo uk-text-primary uk-text-bold">Fantastic</span>
              </div>
              <div className="uk-text-center uk-margin-medium-bottom">
                <h1 className="uk-h2 uk-letter-spacing-small">Create an Account</h1>
              </div>
              <div data-uk-grid className="uk-child-width-auto uk-grid-small uk-flex uk-flex-center uk-margin">
              </div>
              <div className="uk-text-center uk-margin">
                <p className="uk-margin-remove">Use your email for registration:</p>
              </div>
              <form className="uk-text-center">
              <div className="uk-width-1-1 uk-margin uk-text-center">
                    {dupplicate.length>0?
                    <p className="uk-text-small uk-margin-remove">
                    <span className="uk-link-border">The email address has been register before, please go to login page</span>
                  </p>:
                  <p></p>
                    }
                </div>
                <div className="uk-width-1-1 uk-margin">
                  <label className="uk-form-label" >Username</label><input id="name" className="uk-input uk-form-large uk-border-pill uk-text-center" type="text" placeholder="Tom Atkins" onInput={(event, value) => {
                    setUserName(event.target.value);
                  }} />
                </div>
                <div className="uk-width-1-1 uk-margin">
                  <label className="uk-form-label" >Email</label><input id="email" className="uk-input uk-form-large uk-border-pill uk-text-center" type="email" placeholder="tom@company.com" onInput={(event, value) => {
                    setEmail(event.target.value);
                    // console.log(event.target.value);
                  }} />
                </div>
                <div className="uk-width-1-1 uk-margin">
                  <label className="uk-form-label" >Password</label><input id="password" className="uk-input uk-form-large uk-border-pill uk-text-center" type="password" placeholder="Min 8 characters" onInput={(event, value) => {
                    setPassword(event.target.value);
                    // console.log(event.target.value);
                  }}/>
                </div>
                <div className="uk-width-1-1 uk-margin uk-text-center">
                    {userName.length<1? 
                    <p className="uk-text-small uk-margin-remove">
                    <span className="uk-link-border">User name cannot be null</span>
                  </p>:
                  <p></p>
                    }
                </div>
                <div className="uk-width-1-1 uk-margin uk-text-center">
                    {email.length<1? 
                    <p className="uk-text-small uk-margin-remove">
                    <span className="uk-link-border">Email cannot be null</span>
                  </p>:
                  <p></p>
                    }
                </div>
                <div className="uk-width-1-1 uk-margin uk-text-center">
                    {password.length<8? 
                    <p className="uk-text-small uk-margin-remove">
                    
                    <span className="uk-link-border">Password must longer than 8 characters</span>
                  </p>:
                  <p></p>
                    }
                </div>
                <div className="uk-width-1-1 uk-text-center">
                  <button className="uk-button uk-button-primary uk-button-large" >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center uk-light" data-uk-height-viewport>
            <div className="uk-background-cover uk-background-norepeat uk-background-blend-overlay uk-background-overlay uk-border-rounded-large uk-width-1-1 uk-height-xlarge uk-flex uk-flex-middle uk-flex-center" 
            style={{backgroundImage: 'url(https://images.unsplash.com/photo-1606787504667-961f789e78e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwY29va2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80)'}}>
              <div className="uk-padding-large">
                <div className="uk-text-center">
                  <h2 className="uk-letter-spacing-small">Welcome Back</h2>
                </div>
                <div className="uk-margin-top uk-margin-medium-bottom uk-text-center">
                  <p>
                    Already signed up, enter your details and start cooking your
                    first meal today
                  </p>
                </div>
                <div className="uk-width-1-1 uk-text-center">
                  <span className="uk-button uk-button-primary uk-button-large">Sign In</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}
