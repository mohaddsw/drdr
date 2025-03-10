import Button from "../button/Button";
import styles from "./Card.module.css";

interface MedicineCardProps {
  name: string;
  price: number;
  onAddToCart: () => void;
  className?: string;
}

export default function Card({ name, price, onAddToCart, className }: MedicineCardProps) {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      <h3>{name}</h3>
      <p>{price} تومان</p>
      <Button onClick={onAddToCart}>افزودن به سبد</Button>
    </div>
  );
}
