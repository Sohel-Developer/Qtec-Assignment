import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import { TbEdit } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export function Task({ task, onDelete, onUpdate, onComplete }) {
  return (
    <div className={styles.task}>

      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
      <span className={`${styles.pairoty} ${task.isCompleted ? styles.textCompleted : ""}`}>
        {task.pairoty}
      </span>

      <Link to={`edit/${task.id}`}><button className={styles.deleteButton} onClick={() => onUpdate(task.id)}>
        <TbEdit size={20} />
      </button></Link>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}