import { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"
import Register from "../pages/register"


const Routes = () => {

  const [ authenticated, setAuthenticated ] = useState(false);

  const [ dadosUser, setDadosUser] = useState({})  

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("kenzieHub"))
    if(token){
      
      return setAuthenticated(true)
    }

  },[authenticated]) 

  return (
    <Switch>
        <Route exact path="/" >
        <Login 
        setDadosUser={setDadosUser}
        authenticated={authenticated}
        setauthenticated={setAuthenticated}/>
        </Route>
        <Route exact path="/home">
        <Home
        dadosUser={dadosUser}
        setDadosUser={setDadosUser} 
        authenticated={authenticated} 
        />
        </Route>
        <Route exact path="/register">
        <Register authenticated={authenticated}/>
        </Route>
    </Switch>
  )
}

export default Routes