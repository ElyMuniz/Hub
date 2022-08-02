import { Cabecalho, User, Tecnologias, Container } from './style';
import Logo from '../../components/logo';
import { Link} from 'react-router-dom';
import Modal from '../../components/modal';
import { useState } from 'react';
import ListaTecnologias from '../../components/tecnologias';
import Api from '../../services/api';


const Home = ({ dadosUser, setDadosUser, authenticated }) => {
 
  console.log(dadosUser)
  const [ modal, setModal ] = useState(false);

  const reexibir = () => {
    Api
    .get(`/users/${dadosUser.id}`)
    .then((res) =>{
      setDadosUser(res.data)
    })
    .catch((err) => {}); 
  }    
 
  // if(!authenticated){
  //   return  <Redirect to="/" />
  // }
 
  return (
    <>
      {modal && (<Modal setModal={setModal} reexibir={reexibir} />)}  
        <Cabecalho>
          <Logo/>  
          <Link to="/">
            <button onClick={()=>localStorage.removeItem("kenzieHub")} >
              Sair
            </button>
          </Link>
        </Cabecalho>
        <User>
          <h2>Olá, {dadosUser.name}</h2>
          <p>{dadosUser.course_module}</p>
        </User>
        <Tecnologias>
        <h3>Tecnologias</h3>
            <button onClick={() => setModal(!modal) }>
              +
            </button>
        </Tecnologias>
        <Container>
        {dadosUser.techs.map(tecnologia => <li className='li_itens' key={tecnologia.id}>
            <ListaTecnologias 
            titulo ={tecnologia.title} 
            status ={tecnologia.status} 
            id_tech= {tecnologia.id}
            reexibir={reexibir}
            />
            </li>)} 
        </Container>
    </>
  )
}

export default Home