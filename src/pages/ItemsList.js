import React, {useContext, useState } from 'react';
import { Container, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import ItemsContext from 'context/items-context';
import ItemsTable from 'components/ItemsTable'
import Header from 'components/Header';


const colomns =['Id','#','Title','Date','Status','Description','Actions']
const ItemsList = (props) => {
    const[alert,setAlert]=useState(null)
    const context = useContext(ItemsContext);
     
    // useEffect(()=>{
    //     if(!context.userName){
    //        props.history.push("/")
    //     }
    // },[context.userName,props.history])

    const  conFirmDelete = id=> {
           const alert = (<SweetAlert
            warning
            showCancel
            confirmBtnText="Yes, delete it!"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            onConfirm={()=>deleteFile(id)}
            onCancel={()=>setAlert(null)}
            focusCancelBtn
          >
            You will not be able to recover this item !
          </SweetAlert>)

          setAlert(alert)
    }
    const deleteFile = itemId => {
  const temp = [...context.items]
    const id = temp.findIndex(item => item.id === itemId );
    temp.splice(id,1);
    context.setItems(temp)
    localStorage.setItem('items',JSON.stringify(temp)) 

        const alert = (<SweetAlert success title="Deleted"  onConfirm={()=>setAlert(null)}>
        item has been deleted
      </SweetAlert>)
      setAlert(alert)
    }

    let items = context.items.sort( (a, b)=> {
        return b.id - a.id;
      });
   
  return (
      <div className="ItemsList">
         
          <Container>
          <Header  user={context.userName}/>
              <h3>Items List</h3>
                <div className="text-right" >
                  <Link to='/create'> <Button disabled={context.userName!=='admin'} color="success">Create Item</Button></Link> 
                </div>
                {items.length} items 
                <ItemsTable colomns={colomns} items={items}  conFirmDelete={conFirmDelete} disabled={context.userName!=='admin'} />
                {alert}
          </Container>
      </div>
    
  );
}

export default ItemsList;
