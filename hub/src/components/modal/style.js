import styled from "styled-components";

export const StyledModal = styled.div`
position: fixed;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
min-height: 100vh;
background: transparent;
inset: 0;

.modalBox{
    width: 369px;
    height: 342px;
    background: #212529;
    position: relative;
}
    .Cabecalho{
        width: 100%;
        height: 50px;
        padding-left: 1rem;
        display: flex;
        align-items: center;
        background: #343B41;
;
    }
    
    .closeButon{
        position: absolute;
        top: 7px;
        right: 1rem;
        border: none;
        background:transparent;
        opacity: .6;
        transition:.3s;

        &:hover{
            opacity: 1;
        }
    }
    form{
    margin-left:25px ;
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

label{
    height: 0px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    color: #F8F9FA;
    margin-top: 15px;
}

input, select{
    
   height: 48px;
   background: var(--Grey-2);
   color: var(--Grey-0);
   border: 1.2182px solid #F8F9FA;
    border-radius: 4px;

}


button{
   
    height: 48px; 
    background: #FF577F; 
    border: 1.2182px solid #FF577F;
    border-radius: 4.06066px;
    color: #FFFFFF;
    font-size: 16px;

}
`