import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './AddItem.css'


const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  
  return (
    <form className ="addForm" onSubmit = {handleSubmit}>
        <label htmlFor ="addItem">Add Item</label>
        <input 
          placeholder="Add Item"
          className ="input-text"
          type ="text"
          id ="addItem"
          required
          value = {newItem}
          onChange = {(e) => setNewItem(e.target.value)}
        ></input>
      <button 
        className="addIcon"
        type ="submit"
        aria-label="Add Item"
      >
        <FaPlus />
      </button>
    </form>
  )
  
}

export default AddItem;