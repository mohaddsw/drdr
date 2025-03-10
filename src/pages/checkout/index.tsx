import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button/Button";
import styles from "./index.module.css";

interface Medicine {
  id: number;
  name: string;
  price: number;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Medicine[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemoveFromCart = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.container}>
      <h1>جزئیات خرید</h1>
      {cartItems.length === 0 ? (
        <p>سبد خرید شما خالی است!</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((medicine) => (
              <li key={medicine.id} className={styles.item}>
                <span>{medicine.name} - {medicine.price} تومان</span>
                <button onClick={() => handleRemoveFromCart(medicine.id)}>حذف</button>
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            <span>جمع کل: {totalPrice} تومان</span>
          </div>
          <Link href="/confirmation">
            <Button variant="primary" className={styles.confirmButton}>تکمیل خرید</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
