import React, { useState } from "react";
import CustomInput from "../../components/Form/CustomInput";
import Button from "../../components/Form/Button";

const Login = () => {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit =()=>{
        console.log(userName,password);
        localStorage.setItem("username",userName)
        localStorage.setItem("password",password)
        console.log("tested");
    }
    const getUsername=()=>localStorage.getItem("username");
    const getPassword=()=>localStorage.getItem("password");

  return (

    <div>
      <h2>Test System</h2>
      <CustomInput
        lable={"Username"}
        name={"userName"}
        placeholder={"Enter User name"}
        type={"text"}
        onChange={(e)=>{setUserName(e.target.value);}}
      />
      <CustomInput
        lable={"Password"}
        name={"password"}
        placeholder={"Enter password"}
        onChange={(e)=>{setPassword(e.target.value);}}

        type={"password"}
      />
      <Button type={"submit"} value={"login"} onClick={handleSubmit}/>
      <p>Username:{getUsername()}</p>
      <p>Password:{getPassword()}</p>
    </div>
  );
};

export default Login;
