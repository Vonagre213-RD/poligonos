//valores de los botones principales de la nav
import { NavLink } from "react-router";
import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";

//sub componentes
export default function NavItemList({NavLinks}) {
  return (
    <li className={styles["ul--item"]}>
      {NavLinks.map(({path, name}) => (
        <NavLink className={({isActive}) => clsx(styles['ul--item'], isActive ? styles['active'] :"")
        } key={path} to={path} >{name}</NavLink>
      ))}
    </li>
  );
}

NavItemList.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  NavLinks: PropTypes.array
};
