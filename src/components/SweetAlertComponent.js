import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

const SweetAlertComponent = props =>{
    return(
        
            <SweetAlert
               show={props.show}
               type={props.type}
               title={props.title}
               onConfirm={props.onConfirm}
               onCancel={props.onCancel}


          >
              {props.subText}
          </SweetAlert>
        

    )
}

export default SweetAlertComponent