import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import './Main.css';
import logo from './listEmpty.jpg'

const Main = ({items,handleCheck,handleDelete}) => {
  
  
  return (
    <main className="mainTodo">
        <div className ="todo-container">
          {(items.length) ? (
            <ul>
              {items.map((item) => (
                <li className="todo-li" key={item.id}>
                  <input 
                    type="checkbox"
                    onChange ={() => handleCheck(item.id)}
                    checked={item.checked}
                    ></input>
                    <label
                      /*style = {(item.checked) ? {fontStyle:"italic"} : {fontStyle:"normal"} }*/
                      onClick = {() => handleCheck(item.id)}
                    >{item.item}</label>
                    <FaTrashAlt 
                    role="button"
                    tabIndex="0"
                    onClick={() => handleDelete(item.id)}
                    />
                </li>
              ))}
            </ul>
          ) : (
          <div className = "todo-empty">
            <img src={logo} alt="List Empty"></img>
          </div>
          )
          }
        </div>
    </main>
  )
}
export default Main;