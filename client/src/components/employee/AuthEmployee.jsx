import React, { useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";

import {
  validateUserName,
  validateUserPassword,
} from "../../validation/validators";

function AuthEmployee(props) {
  const [employeeUserName, setEmployeeUserName] = useState(null);
  const [employeePassword, setEmployeePassword] = useState(null);
  const [employeeLoginDisabled, setEmployeeLoginDisabled] = useState(true);

  const onEmployeeUserNameInput = (event) => {
    if (
      validateUserName(event.target.value) &&
      (employeePassword !== null || employeePassword === "")
    ) {
      setEmployeeLoginDisabled(false);
    } else {
      setEmployeeLoginDisabled(true);
    }
    setEmployeeUserName(event.target.value);
  };

  const onEmployeePasswordInput = (event) => {
    if (validateUserPassword(event.target.value)) {
      setEmployeeLoginDisabled(false);
    } else {
      setEmployeeLoginDisabled(true);
    }
    setEmployeePassword(event.target.value);
  };

  const onEmployeeLogin = () => {
    const employeeDetails = {
      AdminEmail: employeeUserName,
      AdminPassword: employeePassword,
    };
    localStorage.setItem(
      "LOGGED_IN",
      JSON.stringify({
        ROLE: "EMPLOYEE",
        payload: employeeDetails,
      })
    );
    props.setEmployeeLoggedIn(true);
    props.setEmployeeProfile("EMPLOYEE");
  };
    return (
        <React.Fragment>
         
                {props.role === null && (
                    <div className="col-6 d-flex justify-content-center">
                        <Card textColor="#000" title="Employee" background="#ffffff">
                            <Button 
                                color="success" 
                                label="Proceed As Employee" 
                                width="100%"
                                onClick={() => props.onRoleClicked('Employee')}
                            />
                        </Card>
                    </div>
                )}

                {props.role === "Employee" && (
                    <React.Fragment>
                        <div className="display-4 text-center text-warning">Employee</div>
                        <div className="container text-center">
                            <hr/>
                            <Card title="Please enter your credentials" textColor="#000">
                                <div className="container mt-3">
                                    <div className="row">
                                        <div className="col-12 p-1">
                                            <Input onKeyUp={onEmployeeUserNameInput} type="text" placeholder="Enter Employee User Name"/>
                                        </div>
                                        <div className="col-12 p-1 mb-3">
                                            <Input onKeyUp ={onEmployeePasswordInput} type="password" placeholder="Enter Employee Password"/>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 p-1">
                                                <Button 
                                                    label="Login As Employee"
                                                    color="success"
                                                    width="100%"
                                                    disabled ={employeeLoginDisabled}
                                                    onClick ={onEmployeeLogin}
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

export default AuthEmployee;