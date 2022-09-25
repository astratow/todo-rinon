// import Head from 'next/head'
// import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import Header from '../components/header'

export default function Home() {
  const [todoItem, setTodoItem] = useState('');
  const [items, setItems] = useState([
    "Buy milk",
    "Buy eggs",
    "Buy Playstation"
  ]);
  // add fimctionality
  const handleAdd = () => {
    if (todoItem){setItems(
      [todoItem, ... items,]// needs square brackets otherwise error
      
    )

    setTodoItem("");}
  };
  return (
    

    <div className={styles.container}>
        <Header />
        <div>
          <input type="text" className='input-box' value={todoItem} onChange={(e) => setTodoItem(e.target.value)}/>
          <button type="button" className='add-btn' onClick={handleAdd}>Add</button>
        </div>
        <div><table>
          <td>
            {items.map((item) => (
            <tr key={item}>{item}</tr>
            ))
            }
           
          </td></table>
        </div>
    </div>
  
  )
}
