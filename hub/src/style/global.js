import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
:root {
    --white:#f5f5f5;
    --Color-primary: #FF577F;
    --Color-primary-Focus: #FF427F;
    --Color-primary-Negative: #59323F;

    --Grey-4:#121214;
    --Grey-3:#212529;
    --Grey-2:#343B41;
    --Grey-1:#868E96;
    --Grey-0:#F8F9FA;

    --Sucess:#3FE864;
    --Negative:#E83F5B;    

}

body{
    background-color: var(--Grey-4);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    font-family: Inter;
}

input, button{
    font-family: Inter;
}

h1, h2, h3{
    font-family: Inter;
    font-size: 16px;
}

button{
    font-family: Inter;
    font-size: 12px;
    height: 40.11px;
    background: var(--Grey-3);
    border: 1.2182px solid var(--Grey-3);
    border-radius: 4px;
    color: #F8F9FA;
    cursor: pointer;

}
a {
    text-decoration: none;
}`