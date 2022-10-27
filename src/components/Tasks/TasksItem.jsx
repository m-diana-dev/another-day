import classes from './tasksItem.module.css';

const TasksItem = (props) => {
    return (
        <div className={classes.item}>
            <input type="checkbox" />
            <span>{props.desc}</span>
            <img className={classes.closeTask} src="https://cdn-icons-png.flaticon.com/512/106/106830.png"></img>
        </div>
    );
}

export default TasksItem;