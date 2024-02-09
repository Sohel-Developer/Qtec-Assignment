import todoLogo from '../../assets/todoLogo.svg';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');
  const [pairoty, setPairoty] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title, pairoty);
    setTitle('');
    setPairoty("")
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangePairoty(event) {
    setPairoty(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} />
        <input placeholder=" High, Low, Medium " type="text" onChange={onChangePairoty} value={pairoty} />


        <button>Create <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  )
}