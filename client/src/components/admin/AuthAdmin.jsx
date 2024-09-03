import React, { useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";

import {
  validateUserName,
  validateUserPassword,
} from "../../validation/validators";

function AuthAdmin(props) {
  const userName = JSON.parse(localStorage.getItem("LOGGED_IN"))?.payload
    ?.AdminEmail;
  const [adminUserName, setAdminUserName] = useState(
    userName ? userName : null
  );
  const [adminPassword, setAdminPassword] = useState(null);
  const [adminLoginDisabled, setAdminLoginDisabled] = useState(false);

  const onAdminUserNameInput = (event) => {
    if (
      validateUserName(event.target.value) 
   
    ) {
      setAdminLoginDisabled(false);
    } else {
      setAdminLoginDisabled(true);
    }
    setAdminUserName(event.target.value);
  };

  const onAdminPasswordInput = (event) => {
    if (validateUserPassword(event.target.value)) {
      setAdminLoginDisabled(false);
    } else {
      setAdminLoginDisabled(true);
    }
    setAdminPassword(event.target.value);
  };

  const onAdminLogin = () => {
    const adminDetails = {
      AdminEmail: adminUserName,
      AdminPassword: adminPassword,
    };
    localStorage.setItem(
      "LOGGED_IN",
      JSON.stringify({
        ROLE: "ADMIN",
        payload: adminDetails,
      })
    );
    props.setAdminLoggedIn(true);
    props.setAdminProfile("ADMIN");
  };

    return (
        <React.Fragment>
  
           
                {props.role === null && (
                    <div className="col-6 d-flex justify-content-center">
                        <Card textColor="#000" title="Admin" background="#ffffff">
                            <Button 
                                color="danger" 
                                label="Proceed As Admin" 
                                width="100%"
                                onClick={() => props.onRoleClicked('Admin')}
                            />
                        </Card>
                    </div>
                )}

                {props.role === "Admin" && (
                    <React.Fragment>
                        <div className="display-4 text-center text-warning">Admin</div>
                        <div className="container text-center">
                            <hr/>
                            <Card title="Please enter your credentials" textColor="#000">
                                <div className="container mt-3">
                                    <div className="row">
                                        <div className="col-12 p-1">
                                            <Input  onKeyUp={onAdminUserNameInput} type="text" placeholder="Enter Admin User Name"/>
                                        </div>
                                        <div className="col-12 p-1 mb-3">
                                            <Input onkeyUp={onAdminPasswordInput} type="password" placeholder="Enter Admin Password"/>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 p-1">
                                                <Button 
                                                    label="Login As Admin"
                                                    color="danger"
                                                    width="100%"
                                                    disabled={adminLoginDisabled}
                                                    onClick = {() => {
                                                        onAdminLogin();
                                                    }}
                                                />
                                            </div>
                                            <div className="col-6 p-1">
                                                <Button 
                                                    label="Back" 
                                                    color="warning" 
                                                    width="100%" 
                                                    onClick={props.onBackClick} 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </React.Fragment>
                )}
          
        </React.Fragment>
    );
}

export default AuthAdmin;

