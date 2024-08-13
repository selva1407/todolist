import './App.css';
import Header from './components/Header/Header.js'
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js'
import AddItem from './components/Main/AddItem.js'
import SearchItem from './components/Main/SearchItem.js'
import { useState, useEffect } from 'react'

function App() {
  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("todo_list"));
    localStorageItems ? setItems(localStorageItems) : setItems([]);
  },[]);
  
  const [items,setItems] = useState([]);
  
  const [newItem, setNewItem] = useState("");
  
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked:!item.checked} : item);
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems));
  }
  
  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id )
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems));
  }
  
  
  
  const addItem =(item) => {
    const id = items.length ? items[items.length -1].id +1 : 1;
    const addNewItem = {id,checked:false,item};
    const listItems = [...items,addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
  }
  
  const [search, setSearch] = useState("");
  
  return (
    <div className="App">
      <header className="header">
        <Header title = "Todo List"/>
        <AddItem 
          newItem = {newItem}
          setNewItem = {setNewItem}
          handleSubmit = {handleSubmit}
        />
        <SearchItem 
          search = {search}
          setSearch = {setSearch}
        />
      </header>
      <Main className ="Main"
        items = {items.filter(item => ((item.item)).toLowerCase().includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer
        listLength ={items.length}
      />
    </div>
  );
}

export default App;
