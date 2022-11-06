import classes from './WaterItem.module.css';

const WaterItem = (props) => {
    let delWater = () => {

    }
    return (
        <div className={classes.item}>
            <img src="https://cdn-icons-png.flaticon.com/512/1157/1157223.png"></img>
            <span>{props.amount}</span>
            <button onClick={delWater}><img className={classes.closeWater} src="https://cdn-icons-png.flaticon.com/512/106/106830.png"></img></button>

        </div>
    );
}

export default WaterItem;