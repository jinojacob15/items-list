import React, {useState } from 'react';
import ItemsContext from 'context/items-context';

  const  GlobalState = (props) => {

    const [items,setItems] = useState(JSON.parse(localStorage.getItem('items')) || [])
    const [userName,setUserName] = useState(localStorage.getItem('userName')||'' )
   
    // const  setUserNameGlobal = user => {
    //   setUserName(user)
    // }

  // const addProductToCart = product => {
  //    setCart([...cart,product])
  // }

  // const modifyCart = (product,check) => {
  //   const temp = [...cart]
  //   var id = temp.findIndex(item => item.id === product.id );
  //   if(check){
  //     temp[id].quantity= temp[id].quantity+1
  //   }
  //   else {
  //       temp[id].quantity= temp[id].quantity-1
  //   }
  //   setCart(temp)
  // }

  // const removeProductFromCart = productId => {
  //   const temp = [...cart]
  //   var id = temp.findIndex(product => product.id === productId );
  //   temp.splice(id,1);
  //   setCart(temp)
  // }  
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