import React, { useState,useContext } from 'react';
import { Container} from 'reactstrap';
import LoginFormComponent from 'components/LoginFormComponent.js'
import {ADMIN_CRED,READER_CRED} from 'constants/constants';
import ItemsContext from 'context/items-context';

const LoginPage = (props) => {
    const context = useContext(ItemsContext);
    const[invalidCred,setInvalidCred]=useState('')
    const onSubmit = (data) => {
        if(JSON.stringify(ADMIN_CRED)=== JSON.stringify(data)){
            context.setUserName(data.userName)
            localStorage.setItem('userName', data.userName);
            props.history.push("/items")
        }
        else if(JSON.stringify(READER_CRED)=== JSON.stringify(data)){
            context.setUserName(data.userName)
            localStorage.setItem('userName', data.userName);
            props.history.push("/items")
        }
        else{
          setInvalidCred('Invalid username or password!')
          window.setTimeout(( )=> {
            setInvalidCred('')
          },3000)
        }
    }


  return (
      <div className="LoginPage">
          <Container>
           <LoginFormComponent invalidCred={invalidCred} onSubmit={onSubmit} />
          </Container>
      </div>
    
  );
}

export default LoginPage;
