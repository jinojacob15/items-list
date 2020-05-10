import React, {useContext,useEffect, useState } from 'react';
import { Container} from 'reactstrap';
import ItemsContext from 'context/items-context';
import CreateFormComponent from 'components/CreateFormComponent'
import Header from 'components/Header';
const CreateItem = (props) => {
     const [defaultValues,setDefaultValues]=useState({})
    const context = useContext(ItemsContext);


    useEffect(()=>{
        if(!context.userName){
           props.history.push("/")
        }
    },[context.userName,props.history])

    useEffect(()=>{
        const itemId=props.match.params.id
        if(itemId){
            const items = [...context.items]
            const edititem = items.filter(item => item.id===parseInt(itemId))[0]
            setDefaultValues(edititem)
        }
       
    },[context.items,props.match.params.id])



   const onSubmit = data =>{

    if(data.id){
        const temp = [...context.items]
        
    const id = temp.findIndex(item => item.id === data.id );
    temp.splice(id,1);
    context.setItems([...temp,data])
    localStorage.setItem('items',JSON.stringify([...temp,data])) 
    props.history.push("/items")
    }
    else{
        data["id"]=Date.now();
        data["date"] = new Date(data['date'].getTime() - data['date'].getTimezoneOffset() * 60000).toISOString();
     context.setItems([...context.items,data])
     localStorage.setItem('items',JSON.stringify([...context.items,data])) 
     props.history.push("/items")
    }
       
     
    }
    
  
  return (
      <div className="CreateItem">
          <Container>
          <Header  user={context.userName}/>
  <h3>{Object.keys(defaultValues).length!==0?"Edit Item":"Create item"}</h3>
              <CreateFormComponent onSubmit={onSubmit} defaultValues={defaultValues} disabled={context.userName!=='admin'} />    
          </Container>  

      </div>
    
  );
}

export default CreateItem;
