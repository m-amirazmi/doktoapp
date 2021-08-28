import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.subContainer2}>
          <div className={styles.brandContainer}>
            <h3 className={styles.brandText}>
              {pathname.split("/")[1] || "dashboard"}
            </h3>
          </div>
          <div className={styles.profileContainer}>
            <span className={styles.profileIcon}>
              <i className="far fa-user-circle fa-lg"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
