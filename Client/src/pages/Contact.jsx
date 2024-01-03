
import Layout from "../components/Layout/Layout";
import {Box,styled,Button,Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';


const Component = styled(Box)`
  width: 400px;
  margin: auto;
  margin-top: 100px;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;

`;
const Textf=styled(TextField)
`margin: 20px;
`
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

function Contact() {
  const [data,setData]=useState({
    name:"",
    address:"",
    mobile_no:"",
    message:"",
  })
  const [flag,setflag]=useState(false)
  const onvaluechange=(e)=>{
    setData({... data,[e.target.name]:e.target.value})
    
  }
  const submitFun=async()=>{
    await axios.post("http://localhost:3500/post",data)
    console.log(data)
    setData({
      name:"",
      address:"",
      mobile_no:"",
      message:"",
    })


  }

  //piyushmishrasushma
  //G9O9afindRviINfd
  return (
    <>
      
      <Component>
        <Wrapper>
        <Textf
          
          variant="standard"
          label="Name"
          name="name"
          value={data.name}
          onChange={onvaluechange}
        />
        <Textf
        
        variant="standard"
          label="Address"
          name="address"
          value={data.address}
          onChange={onvaluechange}
         
        />
        <Textf
          
          variant="standard"
          label="Mobile No."
          name="mobile_no"
          value={data.mobile_no}
          onChange={onvaluechange}
          
        />
        <Textf
          variant="standard"
          label="message"
          name="message"
          value={data.message}
          onChange={onvaluechange}  
        />
         <LoginButton variant="contained" onClick={submitFun} >
              Submit
          </LoginButton>
          
  
        </Wrapper>
      </Component>
      <Layout/>

    </>
  );
}

export default Contact;      
