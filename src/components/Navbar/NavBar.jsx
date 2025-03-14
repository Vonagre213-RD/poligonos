// Librerías/estilos
import styles from "./NavBar.module.css";

//componentes
import NavItemList from "./NavItemList.jsx";
import useNavbarData from "./navBarData.js";

export default function NavBar() {
  const { navLinks } = useNavbarData();

  return (
    <>
      <nav id={styles["header__navbar"]}>
        <ul id={styles["navbar__ul"]}>
          <NavItemList NavLinks={navLinks} />
        </ul>
      </nav>
    </>
  );
}
