import { Link, useLocation } from "react-router-dom";
import { routes } from "../../utils/routes";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const { pathname } = useLocation();

  const renderPageLinks = routes.map((route) => {
    if (!route.showOnSide) return null;
    const active = pathname === route.path && styles.active;

    return (
      <Link
        key={route.path}
        className={`${styles.linkContainer} ${active}`}
        to={route.path}
      >
        <span className={styles.linkIconContainer}>{route.icon}</span>
        <span className={styles.linkName}>{route.name}</span>
      </Link>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.brandContainer}>
          <h1 className={styles.brandText}>dokto.</h1>
        </div>
        <nav className={styles.nav}>
          <div>{renderPageLinks}</div>
        </nav>
      </div>
    </div>
  );
}
