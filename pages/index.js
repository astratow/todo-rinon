// import Head from 'next/head'
// import Image from 'next/image'
import { useState } from 'react';
import styles from '../src/styles/Home.module.css'
import Header from '../src/components/header'

export default function Home() {
  const [items, setItems] = useState([
    "Buy milk",
    "Buy eggs",
    "Buy Playstation"
  ]);
  return (
    

    <div className={styles.container}>
        <Header />
        <div>
          <input type="text" />
          <button type="button">Add</button>
        </div>
        <div>
          <ul>
            {items.map((item) => (
            <li key={item}>{item}</li>
            ))
            }
           
          </ul>
        </div>
    </div>
  
  )
}
