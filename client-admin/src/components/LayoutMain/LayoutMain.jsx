import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./LayoutMain.module.css";

export default function LayoutMain({ children }) {
  return (
    <main className={styles.container}>
      <div className={styles.subContainer}>
        <Sidebar />
        <div className={styles.contentContainer}>
          <Header />
          <div className={styles.bodyContainer}>
            <div className={styles.bodySubContainer}>{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
