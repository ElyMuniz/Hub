import { useForm } from "react-hook-form";
import { Container } from './style';
import Logo from '../../components/logo';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Api from "../../services/api";
import { toast } from 'react-toastify';

const Login = ({ setDadosUser, authenticated, setAuthenticated }) => {
  
  const { register, handleSubmit } = useForm();

  const history = useHistory()

  const dadosFormulario = (data) => {
    Api
    .post("/sessions", data)
    .then((res) =>{
      const { user } = res.data;
      const { token } = res.data;

      localStorage.setItem("kenzieHub", JSON.stringify(token))
      setDadosUser(user)
      
      //setAuthenticated(true)
      
      
      return  history.push("/home")
    })
    .catch((err) => toast.error("Email ou senha inválidos.")); 
  };
  
  if(authenticated){
    return  <Redirect to="/home" />
  }

  return (
    <>
        <Logo/>  
        <Container>
            <h1>Login</h1>
            <form className='login_form' onSubmit={handleSubmit(dadosFormulario)}>
                <label>Email</label>
                <input type="email" placeholder='Digite aqui seu nome' {...register("email")}/>
                <label>Senha</label>
                <input type="password" placeholder='Digite aqui sua senha' {...register("password")}/>
                <button type="Submit">Entrar</button>
            </form>
            <p>Ainda não pussui uma conta?</p>
              <Link className='link' to='register'>
            <button className='cadastro'>
               Cadastar-se
               </button>
              </Link>
        </Container>
    </>
  )
}

export default Login