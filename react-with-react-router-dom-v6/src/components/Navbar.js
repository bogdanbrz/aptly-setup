import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <NavLink
                className={({ isActive }) =>
                    `${styles.navItem} ${isActive && styles.active}`
                }
                to="/">
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `${styles.navItem} ${isActive && styles.active}`
                }
                to="/aboutus">
                About Us
            </NavLink>
        </header>
    );
};

export default Navbar;
