import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="AppContainer">
                <nav className={classes.menu}>
                    <ul>
                        <li>
                            <NavLink className={menuLink => menuLink.isActive ? classes.active : classes.item} to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={menuLink => menuLink.isActive ? classes.active : classes.item} to="/tasks">Tasks</NavLink>
                        </li>
                        <li>
                            <NavLink className={menuLink => menuLink.isActive ? classes.active : classes.item} to="/water">Water</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Header;