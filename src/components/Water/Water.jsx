import classes from './Water.module.css';
import WaterItem from './WaterItem';


const Water = (props) => {

    const waterElements = props.waterData.map(water => <WaterItem amount={water.amount} />)
    return (
        <div className={classes.appWater}>
            <div className="AppContainer">
                <div className={classes.water}>
                    <h1>Water</h1>
                    <div className={classes.waterItems}>
                        {waterElements}
                    </div>
                    <textarea placeholder='Amount of water'></textarea>
                    <button className="AppButton">Add water</button>
                </div>
            </div>
        </div>
    );
}

export default Water;