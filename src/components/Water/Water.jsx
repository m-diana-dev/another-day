import classes from './Water.module.css';
import WaterItem from './WaterItem';
import React from 'react';
import { addWaterActionCreator, updateNewWaterTextActionCreator } from '../../redux/state';

const Water = (props) => {

    const waterElements = props.waterState.waterData.map(water => <WaterItem amount={water.amount} />)

    let newWaterElement = React.createRef();
    const addWater = () => {
        props.dispatch(addWaterActionCreator());
    }

    const onWaterText = () => {
        let text = newWaterElement.current.value;
        props.dispatch(updateNewWaterTextActionCreator(text));
    }

    return (
        <div className={classes.appWater}>
            <div className="AppContainer">
                <div className={classes.water}>
                    <h1>Water</h1>
                    <div className={classes.waterItems}>
                        {waterElements}
                    </div>
                    <textarea onChange={onWaterText} value={props.waterState.newWaterText} ref={newWaterElement} placeholder='Amount of water'></textarea>
                    <button className="AppButton" onClick={addWater}>Add water</button>
                </div>
            </div>
        </div >
    );
}

export default Water;