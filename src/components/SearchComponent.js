import React, {useContext, useState } from 'react';
import { Input} from 'reactstrap';
import ItemsContext from 'context/items-context';

const SearchComponent = (props) => {
    const[value,setInputValue]=useState('')
    const context = useContext(ItemsContext)

    const handleChange = e => {
        setInputValue(e.target.value)
        filterTable(e.target.value)
    }

    const filterTable = searchItem => {
        let items = [...JSON.parse(localStorage.getItem('items')) || []]
        let filteredArray = []
          if(searchItem){
            items.forEach(item =>{
                let searchString = `${item.title}${item.status}${item.description}${item.id}`
                if(searchString.includes(searchItem)){
                    filteredArray.push(item)
                }
               })

               context.setItems(filteredArray)
          }
          else {
            context.setItems(JSON.parse(localStorage.getItem('items')) || [])
          }
    
    }


  return (
      <div className="SearchComponent clearfix">
          <Input placeholder="Search.." value={value} onChange={handleChange} />
      </div>
    
  );
}

export default SearchComponent;
