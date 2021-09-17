import React from 'react'
import styles from './styles.module.css'
import SetItem from "./Util/SetItem";
import GetItem  from './Util/GetItem';
import RemoveItem from "./Util/RemoveItem";
import Clear from "./Util/Clear";
import FromHook from "./FromHook";


const ExampleComponent = ({ text }) => {
  return <div className={styles.test}> meow {text}</div>
}

export  {  ExampleComponent ,SetItem , GetItem , RemoveItem, Clear ,FromHook };