import React, { FC } from "react";
import styles from "./Box.module.scss"; 
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;

}

const Box:FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.box} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Box;