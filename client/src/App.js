
import React , {useState} from "react";
import AdminHome from "./components/admin/AdminHome"
import EmployeeHome from "./components/employee/EmployeeHome";

import Authentication from "./components/auth/Authentication"
function App() {
  const [didLoginHappen , setDidLoginHappen] = useState(false);
  const [loggedInProfile , setLoggedInProfile] = useState(null);
const renderHome = loggedInProfile ==="ADMIN" ? (
  <AdminHome loggedInProfile ={loggedInProfile}
  didLoginHappen = {setDidLoginHappen}
  setLoggedInProfile={setLoggedInProfile}/>
) :
<EmployeeHome loggedInProfile ={loggedInProfile}
didLoginHappen = {setDidLoginHappen}
setLoggedInProfile={setLoggedInProfile}/>
  return (
  <React.Fragment>
  <main>
    {!didLoginHappen && (
  <Authentication setLoggedInProfile ={setLoggedInProfile} setLoginAction ={setDidLoginHappen}/>
    )}
    {didLoginHappen && renderHome}
   </main>
  </React.Fragment>
  );
}



export default App;
