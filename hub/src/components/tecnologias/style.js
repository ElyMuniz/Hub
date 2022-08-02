import styled from "styled-components";

export const Linhaproduto = styled.div`
    width: 100%;
    height: 49px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    background: #121214;
    padding-left: 15px;
    border-radius: 4px;


    h3{
        width: 70%;
        color: var(--Grey-0);
    }


    button{
        width: 10%;
        height: 12px; 
        background: none; 
        border: none;
        border-radius: 4.06066px;
        color: rgba(255, 255, 255, 0.8);;
        font-size: 16px;

    }

    p{
        width: 20%;
        font-size: 12px;
        line-height: 18px;
        color: #868E96;
        
    }

`
