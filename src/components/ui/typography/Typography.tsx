import React, { FC, ReactNode } from "react";
import styles from "./Typography.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
  variant?:string

}

const Typography:FC<Props> = ({ variant = "body", className, children }) => {
  return (
    <p className={`${styles.typography} ${styles[variant]} ${className}`} >
      {children}
    </p>
  );
};

export default Typography;