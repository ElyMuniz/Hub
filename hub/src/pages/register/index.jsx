import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Cabecalho, Container } from './style';
import Logo from '../../components/logo';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Api from '../../services/api';
import { toast } from 'react-toastify';


const Register = ({ authenticated }) => {

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório.").matches(/^([a-zA-Zà-úÀ-Ú]|\s+)+$/,"Permitido apenas letras!"),
    email: yup.string().required("Email obrigatório.").email("Email inválido."),
    password: yup
    .string().required("Senha obrigatória.")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,}$/,"Mínimo de 8 caracteres. Com letras maiúsculas e minúculas, números e caracter especial"),
    confirmaSenha:yup
    .string()
    .oneOf([yup.ref("password")],"As senhas devem ser iguais!"),
    bio:yup.string().required("Biografia obrigatória."),
    contact: yup.string().required("Informar contato (tel ou rede social).")
  })

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(formSchema),  
   });

   const history = useHistory()

  const dadosFormulario = ({ email, password, name, bio, contact, course_module }) => {
    const user ={
      email,
      password,
      name,
      bio,
      contact,
      course_module
    }

    Api
    .post("/users", user)
    .then((res) => {
      toast.success("Sucesso ao criar conta")
      return history.push("/")
    })
    .cath((err) => toast.error("Erro ao criar conta, tente outro email"));

  }

   if(authenticated){
      return  <Redirect to="/home" />
    }
 
  return (
    <>
        <Cabecalho>
          <Logo/>  
            <Link to="/">
              <button>
                Voltar
              </button>
            </Link>
        </Cabecalho>
        <Container>
            <h1>Crie sua conta</h1>
            <p>Rapido e grátis, vamos nessa</p>
            <form className='login_form' onSubmit={handleSubmit(dadosFormulario)}>
              <label>Nome</label>
                <input type="text" placeholder='Digite aqui seu nome' {...register("name")}/>
                <p className='msg_erro'>{errors.name?.message}</p>
                <label>Email</label>
                <input type="email" placeholder='Digite aqui seu email' {...register("email")}/>
                <p className='msg_erro'>{errors.email?.message}</p>
                <label>Senha</label>
                <input type="password" placeholder='Digite aqui sua senha' {...register("password")}/>
                <p className='msg_erro'>{errors.password?.message}</p>
                <label>Confirmar Senha</label>
                <input type="password" placeholder='Digite novamente sua senha' {...register("confirmaSenha")}/>
                <p className='msg_erro'>{errors.confirmaSenha?.message}</p>
                <label>Bio</label>
                <input type="text" placeholder='Fale sobre você' {...register("bio")}/>
                <p className='msg_erro'>{errors.bio?.message}</p>
                <label>Contato</label>
                <input type="text" placeholder='Opção de contato' {...register("contact")}/>
                <p className='msg_erro'>{errors.contact?.message}</p>  
                <label>Selecionar módulo</label>
                <select placeholder='Primeiro Módulo' {...register("course_module")}>
                  <option>Primeiro módulo (Introdução ao Frontend)</option>
                  <option>Segundo módulo (Frontend Avançado)</option>
                  <option>Terceiro módulo (Introdução ao Backend)</option>
                  <option>Quarto módulo (Backend Avançado)</option>
                </select>
                <button type='submit'>Cadastar</button>
            </form>
        </Container>
    </>
  )
}

export default Register