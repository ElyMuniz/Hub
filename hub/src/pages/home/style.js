import styled from "styled-components";
export const Cabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 20px;

    button{
        width: 67.49px;
    }
    
`
export const User = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 20px;


    @media (max-width: 800px) {
        flex-direction: column;
    }   
    
h2{
    font-size: 18px;
    line-height: 28px;
    color: var(--Grey-0);
}

    p{
    font-size: 12px;
    line-height: 18px;
    color: #868E96;
    }
       
`
export const Tecnologias = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 20px;
h3{
    font-size: 16px;
    line-height: 18px;
    color: var(--Grey-0);
    }

    button{
        width:32px;
        height:32px;
    }
`


export const Container = styled.ul`
    width: 780px;
    margin-bottom: 30px;
    padding-bottom:28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--Grey-3);
    gap: 20px;
    padding-top: 20px;

   
    @media (max-width: 800px) {
        width: 100%;
       
    }
    .li_itens{
        width: 90%;
        height: 49px;
        display: flex;
        align-items: center;
        
    }
`
