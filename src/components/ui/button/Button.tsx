import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string; // دریافت کلاس سفارشی
}

export default function Button({ children, onClick, variant = "primary", className }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]} ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
}
