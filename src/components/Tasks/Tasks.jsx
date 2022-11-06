import { NavLink } from 'react-router-dom';
import classes from './Tasks.module.css';
import TasksItem from './TasksItem';
import TasksMenuItems from './TasksMenuItems';
import React from 'react';
import { addTaskActionCreator, updateNewTaskTextActionCreator } from '../../redux/state';

const Tasks = (props) => {
    const tasksElements = props.tasksState.tasksData.map(tasks => <TasksItem desc={tasks.desc} />)
    const tasksMenuElements = props.tasksState.tasksMenuData.map(el => <TasksMenuItems day={el.day} id={el.id} />)

    let newTaskElement = React.createRef();
    const addTask = () => {
        props.dispatch(addTaskActionCreator());
    }
    let onTaskText = () => {
        let text = newTaskElement.current.value;
        props.dispatch(updateNewTaskTextActionCreator(text));
    }
    return (
        <div className={classes.appTasks}>
            <div className="AppContainer">
                <div className={classes.tasks}>
                    <h1>Tasks</h1>
                    <ul className={classes.tasksMenu}>
                        {tasksMenuElements}
                    </ul>
                    <div className={classes.tasksItems}>
                        {tasksElements}
                    </div>
                    <textarea onChange={onTaskText} ref={newTaskElement} placeholder='Task description' value={props.tasksState.newTaskText} />
                    <button className="AppButton" onClick={addTask}>Add task</button>
                </div>
            </div>
        </div>
    );
}

export default Tasks;