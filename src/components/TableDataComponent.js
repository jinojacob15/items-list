import React  from 'react';
import {  Button} from 'reactstrap';
import moment from 'moment';
import {Link} from 'react-router-dom'
const TableDataComponent = (props) => {

    return(
        <>{

       
        props.data.map((items,index) => {

            return(<tr key={index}>
            <td>{items.id}</td>
            <td>{index+1}</td>
           <td>{items.title}</td>
           <td>{moment(items.date).format("MMM Do YYYY")  }</td>
           <td>{items.status}</td>
           <td>{items.description}</td>
           <td><Link to={"/edit/"+items.id}><Button disabled={props.disabled} className="btn-sm" color="info">Edit</Button></Link> <Button color="danger" disabled={props.disabled} className="btn-sm" onClick={()=>props.conFirmDelete(items.id)}>Delete</Button> </td>
  </tr>)

        })

    }   
</>
    );
}

export default TableDataComponent;