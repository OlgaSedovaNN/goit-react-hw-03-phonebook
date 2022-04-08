import styled from "@emotion/styled";

export const Form = styled.form`
display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
`
export const ContactInput = styled.input`

  margin-bottom: 30px;
`

export const AddContactBtn = styled.button`
width: 100px;
margin-left: auto;
margin-right: auto;
background-color: mediumpurple;
border: none;
border-radius: 5px;
&:hover {
  background-color: hotpink;}
`