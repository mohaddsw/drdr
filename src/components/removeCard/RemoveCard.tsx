import Button from "../ui/button/Button";
import styles from "./RemoveCard.module.css";

interface MedicineRemoveCardProps {
  name: string;
  price: number;
  onDellToCart: () => void;
  className?: string;
}

export default function RemoveCard({ name, price, onDellToCart, className }: MedicineRemoveCardProps) {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      <h3>{name}</h3>
      <p>{price} تومان</p>
      <Button onClick={onDellToCart}>  حذف</Button>
    </div>
  );
}
