import { useEffect, useRef } from "react"
import { StyledModal } from './style';
import { MdClose } from 'react-icons/md'
import { useForm } from "react-hook-form";
import Api from "../../services/api";
import { toast } from 'react-toastify';

const Modal = ({ setModal, reexibir }) => {

    const modalRef = useRef()

    useEffect(() => {
        
        function cliqueFora (event){
            const target = event.target;
            if(!modalRef.current?.contains(target)){
                setModal(false);
            }
        }

        window.addEventListener('mousedown', cliqueFora)
        return () => {
            window.removeEventListener('mousedown', cliqueFora)
        }
    },[])

    const { register, handleSubmit } = useForm();

    
  
    const dadosFormulario = (data) => {
        
        
      Api
      .post("/users/techs",{...data}
          
        , {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("kenzieHub"))}` 
          },
        })
      .then((res) =>{
               if(res.status === 201){reexibir()} 
              })
      .catch((err) => toast.error("Tecnologia já cadastrada")); 

            };

    

  return (
    <>
    <StyledModal>
        <div className="modalBox" ref={modalRef}>
            <div className="Cabecalho">
                <h2>Cadastar Tecnologia</h2>
                <button onClick={() => setModal(false)} className="closeButon"><MdClose size={21} /></button>
            </div>
            <form onSubmit={handleSubmit(dadosFormulario)}>
                <label>Nome</label>
                <input type="text" placeholder='Digite aqui a tecnologia' {...register("title")}/>
                <label>Selecione status</label>
                <select {...register("status")}>
                  <option>Iniciante</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                </select>
                <button type='submit'>Cadastar</button>
            </form>

        </div>
    </StyledModal>
    </>

  )
}

export default Modal