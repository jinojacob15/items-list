import React from 'react';
import { Table} from 'reactstrap';
import TableDataComponent from 'components/TableDataComponent'

const ItemsTable = (props) => {
    
  return (
      <div className="ItemsTable">
         <Table bordered>
      <thead>
        <tr>
            {props.colomns.map((title,index)=>
               <th key ={index}>{title}</th>
             )}
        </tr>
      </thead>
      <tbody>
        {props.items.length === 0 ?(<tr className="text-center"><td>No items to show</td></tr>):( props.items.map((data,index)=>
        <TableDataComponent index={index} data={data} conFirmDelete={props.conFirmDelete} disabled={props.disabled} />))}
      </tbody>
    </Table>
      </div>
    
  );
}

export default ItemsTable;
