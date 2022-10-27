import { NavLink } from 'react-router-dom';
import classes from './Tasks.module.css';

const TasksMenuItems = (props) => {
    return (
        <li><NavLink className={tasksLink => tasksLink.isActive ? classes.active : classes.item} to={"/tasks/" + props.id}>{props.day}</NavLink></li>
    );
}

export default TasksMenuItems;