import { Linhaproduto } from './style';
import { MdDelete } from 'react-icons/md'
import Api from '../../services/api';

const ListaTecnologias = ({ titulo, status, id_tech, reexibir }) => {

  const itemRemover = (event) =>{
   
      Api
        .delete(`/users/techs/${event.currentTarget.id}`,          
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("kenzieHub"))}` 
            },
          })
        .then((res) =>{
        
          if(res.status === 204){reexibir()}

        })
        .catch((err) => {});

      };

        

  return (
    <>
    <Linhaproduto>
        <h3>{titulo}</h3>
        <p>{status}</p>
        <button onClick={itemRemover} id={id_tech} ><MdDelete size={21}  /></button>
    </Linhaproduto>
    </>
    )
}

export default ListaTecnologias