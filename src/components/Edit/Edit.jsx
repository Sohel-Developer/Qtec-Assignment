import React, { useEffect, useState } from 'react';
import styles from './edit.module.css'
import { TbEdit } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import todoLogo from '../../assets/todoLogo.svg';

const LOCAL_STORAGE_KEY = 'todo:tasks';

const Edit = () => {
    const { id } = useParams()

    const [tasks, setTasks] = useState([]);
    const exsecting = tasks.find(task => task.id == id)

    const navigate = useNavigate()

    function loadSavedTasks() {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    }

    function setTasksAndSave(newTasks) {
        setTasks(newTasks);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    }

    useEffect(() => {
        loadSavedTasks();
    }, [])

    const another = tasks.filter(task => task.id !== id)

    function updateTask(taskTitle, taskPairoty) {
        setTasksAndSave([...another, {
            id: id,
            title: taskTitle,
            pairoty: taskPairoty,
            isCompleted: false
        }]);
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const title = e.target.title.value
        const pairoty = e.target.pairoty.value

        setTasks(another)
        updateTask(title, pairoty)

        navigate(-1)

    }

    return (
        <header className={styles.header}>
            <img src={todoLogo} />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input name='title' placeholder="Add a new task" type="text" defaultValue={exsecting?.title} />
                <input name='pairoty' placeholder=" High, Low, Medium " type="text" defaultValue={exsecting?.pairoty} />


                <button>Update <TbEdit size={20} /></button>
            </form>
        </header>
    );
};

export default Edit;