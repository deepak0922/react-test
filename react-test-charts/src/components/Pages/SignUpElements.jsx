import styled from 'styled-components';

export const Form = styled.div`



`;

export const FormContent = styled.div`
margin: 0 auto;
background:#F7BB41;
height: fit-content;
display: flex;
font-weight:Bold;
padding:20px;
width:50%;
font-family:"Calibri";
justify-content: space-between;
z-index: 12;
`;

export const Inputs = styled.div.input`
width:200px;
border-radius:10px;

`;

export const FormBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
	display: none;
}
border-radius: 20px;
background: #11ADE8;
padding: 10px 30px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
`;

export const Logo = styled.div`

`;

export const Label = styled.div`

`;