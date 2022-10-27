import { NavLink } from 'react-router-dom';
import classes from './Tasks.module.css';
import TasksItem from './TasksItem';
import TasksMenuItems from './TasksMenuItems';

const Tasks = (props) => {
    const tasksElements = props.tasksData.map(tasks => <TasksItem desc={tasks.desc} />)
    const tasksMenuElements = props.tasksMenuData.map(el => <TasksMenuItems day={el.day} id={el.id} />)
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
                    <textarea placeholder='Task description'></textarea>
                    <button className="AppButton">Add task</button>
                </div>
            </div>
        </div>
    );
}

export default Tasks;