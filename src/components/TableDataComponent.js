import React  from 'react';
import {  Button} from 'reactstrap';
import moment from 'moment';
import {Link} from 'react-router-dom'
const TableDataComponent = (props) => {

    return(

        <tr key={props.index}>
                  <td>{props.data.id}</td>
                  <td>{props.index+1}</td>
                 <td>{props.data.title}</td>
                 <td>{moment(props.data.date).format("MMM Do YYYY")  }</td>
                 <td>{props.data.status}</td>
                 <td>{props.data.description}</td>
                 <td><Link to={"/edit/"+props.data.id}><Button disabled={props.disabled} className="btn-sm" color="info">Edit</Button></Link> <Button color="danger" disabled={props.disabled} className="btn-sm" onClick={()=>props.conFirmDelete(props.data.id)}>Delete</Button> </td>
        </tr>

    )
}

export default TableDataComponent;