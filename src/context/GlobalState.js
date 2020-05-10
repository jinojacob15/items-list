import React, {useState } from 'react';
import ItemsContext from 'context/items-context';

  const  GlobalState = (props) => {

    const [items,setItems] = useState(JSON.parse(localStorage.getItem('items')) || [])
    const [userName,setUserName] = useState(localStorage.getItem('userName')||'' )
   
    return (
      <ItemsContext.Provider
        value={{
          items,
          userName,
          setUserName,
          setItems
        }}
      >
        {props.children}
      </ItemsContext.Provider>
    );

}

export default GlobalState;