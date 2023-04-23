import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const nameRegEx = /^[a-zA-Z0-9]+$/;
  const handleName = (e) => {
    let name = e.target.value;
    if (name === "" || name.length <= 6 || !name.match(nameRegEx)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }

  const passRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  const handlePassword = (e) => {
    let pass = e.target.value;
    if (pass === "" || !pass.match(passRegEx)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }

  const navigate = useNavigate();

  const handleSubmit = () => {
    let name = document.getElementById('un').value;
    let pass = document.getElementById('pwd').value;
    let check = document.getElementById('check');

    if (name === "" || pass === "") {
      alert('Username and Password cannot be empty')
    } else if (check.checked === false) {
      alert('Please check the checkbox');
    } 
    else {
      alert('Logged In Successfully');
      setName(name);
      setPassword(password);
      navigate('/home');
    }
  }

  return (
    <div className="login_container">
    <div class="box">
    <div class="container">
        <div class="top">
            <span>Have an account?</span>
            <header className="head">Login</header>
        </div>
        <div class="input-field">
            <input type="text" value={name} onChange={handleName} class="input" placeholder="Username" id="un" />
            <i class='bx bx-user' ></i>
            {
              nameError && <span style={{color: "red"}}>
                Username should only contain alphanumeric characters
              </span>
            }
        </div>
        <div class="input-field">
            <input type="Password" value={password} onChange={handlePassword} class="input" placeholder="Password" id="pwd" />
            <i class='bx bx-lock-alt'></i>
            {
              passwordError && <span style={{color: "red"}}>
                Password must be in between 6-15 characters which contain
                atleast one numeric digit and a special character
              </span>
            }
        </div>
        <div class="input-field">
            <input onClick={handleSubmit} type="submit" class="submit" value="Login" id="" />
        </div>
        <div class="two-col">
            <div class="one">
               <input type="checkbox" name="" id="check" />
               <label for="check"> Remember Me</label>
            </div>
            <div class="two">
                {/* <label><a href="#">Forgot password?</a></label> */}
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Login