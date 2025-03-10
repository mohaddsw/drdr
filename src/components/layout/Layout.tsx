import React, { FC } from "react";
import styles from "./Layout.module.scss"; 
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout:FC<Props> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.layoutHeader}>
        <h1>DrDr</h1>
      </header>
      <main className={styles.layoutMain}>
        {children}
      </main>
    </div>
  );
};

export default Layout;