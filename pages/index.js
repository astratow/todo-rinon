import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <h1>Todo for Rinon</h1>
        <input type="text" />
        <button type="button">Add</button>
    </div>
  )
}
