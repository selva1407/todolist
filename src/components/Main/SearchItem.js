import React from 'react';
import './SearchItem.css';


const SearchItem = ({search,setSearch}) => {
  
  return (
    <form className ="searchForm" onSubmit = {(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input 
        id ="search"
        className = "input-text"
        type ="text"
        placeholder = "Search Items"
        role = "searchbox"
        value = {search}
        onChange = {(e) => setSearch(e.target.value)}
      >
      </input>
    </form>
  )
}

export default SearchItem;