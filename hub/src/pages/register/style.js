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

export const Container = styled.div`
    width: 369px;
    margin-bottom: 30px;
    padding-bottom:28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--Grey-3);
    gap: 20px;
    padding-top: 20px;

h1{
    color: var(--Grey-0);
}

form{
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

label{
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
p{
    font-size: 12px;
    line-height: 18px;
    color: #868E96;
}

.msg_erro{
    color: #FF577F;
}

.cadastro{
    width: 85%;
    background: #868E96;
    border: 1.2182px solid #868E96;
}
`
